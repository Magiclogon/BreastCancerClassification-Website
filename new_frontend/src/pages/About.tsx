import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiradsInfo from "@/components/BiradsInfo";
import { Card, CardContent } from "@/components/ui/card";
import { Ribbon } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 px-4 bg-pink-gradient">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                  Classification BI-RADS
                </h1>
                <p className="text-lg text-gray-700 mb-4">
                  Le système BIRADS (Breast Imaging-Reporting and Data System) est un système standardisé développé par l'American College of Radiology pour classer les résultats des mammographies, échographies mammaires et IRM mammaires.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="w-48 h-48 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Ribbon className="w-32 h-32 text-pink-400 fill-pink-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto">
            <BiradsInfo />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;