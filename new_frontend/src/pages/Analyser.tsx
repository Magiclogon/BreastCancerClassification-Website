
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormulaireRapport from "@/components/FormulaireRapport";
import BiradsInfo from "@/components/BiradsInfo";

const AnalyserPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-8 px-4 bg-pink-gradient">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold text-pink-600 mb-3">
                Analyse de Rapports Médicaux
              </h1>
              <p className="text-lg text-gray-700">
                Chargez un rapport médical portant sur le cancer du sein pour en extraire la classification BIRADS
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-8 px-4 bg-white">
          <div className="container mx-auto space-y-10">
            <FormulaireRapport />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnalyserPage;
