import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import BiradsResult from "./BiradsResult";

import predictService from "@/services/predictService";

import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.js`;


const FormulaireRapport = () => {
  const [reportText, setReportText] = useState("");
  const [tabValue, setTabValue] = useState("text");
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [biradsLevel, setBiradsLevel] = useState<number | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!reportText && !file) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir le texte du rapport ou télécharger un fichier.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      let textToAnalyze = reportText;

      if (!reportText && file) {
        const fileType = file.type;

        if (fileType === "text/plain") {
          textToAnalyze = await file.text();
        } else if (fileType === "application/pdf") {
          const arrayBuffer = await file.arrayBuffer();
          const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
          let extractedText = "";

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const strings = content.items.map((item: any) => item.str);
            extractedText += strings.join(" ") + "\n";
          }

          textToAnalyze = extractedText;
        } else if (
          fileType ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
          const arrayBuffer = await file.arrayBuffer();
          const result = await mammoth.extractRawText({ arrayBuffer });
          textToAnalyze = result.value;
        } else {
          toast({
            title: "Type de fichier non pris en charge",
            description:
              "Seuls les fichiers .txt, .pdf et .docx sont acceptés.",
            variant: "destructive",
          });
          return;
        }
      }

      const result = await predictService.predictBirads(textToAnalyze);
      setBiradsLevel(parseInt(result));
      toast({
        title: "Analyse terminée",
        description: `Votre rapport a été analysé. Sa classification BIRADS est: ${result}`,
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'analyse du rapport.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    {biradsLevel !== null && <BiradsResult biradsLevel={biradsLevel} />}
      <Card className="shadow-md border-pink-100 max-w-3xl mx-auto">
        <CardHeader className="bg-pink-50 rounded-t-lg">
          <CardTitle className="text-2xl text-pink-600">Analyser un rapport médical d'imagerie mammaire</CardTitle>
          <CardDescription>
            Chargez votre rapport médical ou saisissez du texte pour obtenir une classification BIRADS.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue={tabValue} onValueChange={(value) => {
              setTabValue(value);
              setReportText("");
              setFile(null);
              setBiradsLevel(null);
            }}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="text">Saisir le texte</TabsTrigger>
              <TabsTrigger value="upload">Charger un fichier</TabsTrigger>
            </TabsList>
            
            <form onSubmit={handleSubmit}>
              <TabsContent value="text">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="report-text">Texte du rapport</Label>
                    <Textarea
                      id="report-text"
                      placeholder="Collez le texte de votre rapport d'imagerie mammaire ici..."
                      className="min-h-[200px]"
                      value={reportText}
                      onChange={(e) => setReportText(e.target.value)}
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="upload">
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-pink-200 rounded-lg p-8 text-center">
                    <FileUp className="mx-auto h-12 w-12 text-pink-300 mb-4" />
                    <Label 
                      htmlFor="file-upload" 
                      className="cursor-pointer text-pink-500 hover:text-pink-600 font-medium block mb-2"
                    >
                      Cliquez pour téléverser un fichier
                    </Label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                    />
                    <p className="text-xs text-gray-400">
                      Formats supportés : PDF, DOCX, TXT
                    </p>
                    
                    {file && (
                      <div className="mt-4 p-3 bg-pink-50 rounded-md text-left">
                        <p className="text-sm truncate">
                          Fichier sélectionné : <span className="font-medium">{file.name}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              <div className="mt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-pink-500 hover:bg-pink-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Analyse en cours..." : "Analyser le rapport"}
                </Button>
              </div>
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default FormulaireRapport;