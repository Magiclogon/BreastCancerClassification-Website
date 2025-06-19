import { Ribbon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-purple-50 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Ribbon className="h-5 w-5 text-pink-500 fill-pink-200" />
            <span className="font-medium text-pink-500">Classification BIRADS</span>
          </div>
          
          <div className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-pink-500">Analyser</a>
            <a href="/about" className="text-gray-600 hover:text-pink-500">À propos BIRADS</a>
          </div>
          
          <div className="text-sm text-gray-500 mt-4 md:mt-0 text-center md:text-right">
            Créé par : Walid Housni - Zouhair Chakroun - Ahmed Daoudi - Hamza El Fellah
            <br />
            Encadré par: Pr. BENHLIMA Laïla
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
