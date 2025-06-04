import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categoriesBirads = [
  {
    category: "BIRADS 0",
    description: "Incomplet - Nécessite une évaluation d'imagerie supplémentaire",
    details: "Cela signifie que le radiologue a besoin d'images supplémentaires ou d'informations pour établir une évaluation complète. Des examens d'imagerie complémentaires ou des comparaisons avec des examens antérieurs peuvent être nécessaires."
  },
  {
    category: "BIRADS 1",
    description: "Négatif",
    details: "Indique qu'il n'y a pas d'anomalie significative. Les seins sont symétriques sans masse, distorsion architecturale ou calcifications suspectes."
  },
  {
    category: "BIRADS 2",
    description: "Lésion bénigne",
    details: "Le radiologue a identifié une lésion bénigne (non cancéreuse) telle que des calcifications bénignes, des kystes mammaires ou un fibroadénome bénin. Aucune action supplémentaire n'est nécessaire."
  },
  {
    category: "BIRADS 3",
    description: "Probablement bénin",
    details: "Suggère une lésion ayant une forte probabilité d'être bénigne (risque de malignité inférieur à 2%). Un suivi à court terme est recommandé, généralement dans 6 mois."
  },
  {
    category: "BIRADS 4",
    description: "Anomalie suspecte",
    details: "Cette catégorie indique une lésion suspecte nécessitant une biopsie. Elle est subdivisée en 4A, 4B et 4C selon le niveau de suspicion, avec des risques de malignité variant de 2 à 95%."
  },
  {
    category: "BIRADS 5",
    description: "Fortement évocateur de malignité",
    details: "Indique une lésion ayant une très forte probabilité (≥95%) d'être cancéreuse. Une action appropriée doit être entreprise, généralement une biopsie suivie d'un traitement si nécessaire."
  },
  {
    category: "BIRADS 6",
    description: "Malignité confirmée par biopsie",
    details: "Cette catégorie est réservée aux examens réalisés après confirmation histologique d'un cancer du sein mais avant son exérèse chirurgicale complète ou traitement."
  }
];

const BiradsInfo = () => {
  return (
    <Card className="shadow-md border-pink-100">
      <CardHeader className="bg-pink-50 rounded-t-lg">
        <CardTitle className="text-2xl text-pink-600">Classification BIRADS</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-6">
          Le système BIRADS (Breast Imaging-Reporting and Data System) est un système standardisé utilisé par les radiologues pour décrire les résultats des mammographies, échographies mammaires et IRM mammaires. Il permet de communiquer le niveau de suspicion des anomalies détectées et les actions à entreprendre.
        </p>
        
        <Tabs defaultValue="overview">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="overview">Catégories BIRADS</TabsTrigger>
            <TabsTrigger value="details">Explications détaillées</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categoriesBirads.map((item) => (
                <Card key={item.category} className="border-pink-100">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-pink-600 mb-2">{item.category}</h3>
                    <p className="text-gray-700 font-medium">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            <div className="space-y-6">
              {categoriesBirads.map((item) => (
                <div key={item.category} className="border-b border-pink-100 pb-4 last:border-0">
                  <h3 className="text-xl font-bold text-pink-600 mb-2">{item.category}</h3>
                  <p className="text-gray-700 font-medium mb-2">{item.description}</p>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BiradsInfo;