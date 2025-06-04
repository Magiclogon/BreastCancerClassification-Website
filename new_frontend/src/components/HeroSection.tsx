
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative bg-pink-gradient overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmY1ZjUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat opacity-10"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-500 mb-6">
            Breast Cancer BIRADS Classification
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Upload your breast imaging medical report and receive accurate BIRADS classification. Supporting medical professionals with precision and care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8"
              onClick={() => navigate('/analyze')}
            >
              Analyze Report
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-pink-500 text-pink-500 hover:bg-pink-50 text-lg px-8"
              onClick={() => navigate('/about')}
            >
              Learn About BIRADS
            </Button>
          </div>
        </div>
      </div>
      
      {/* Pink ribbon decoration */}
      <div className="hidden md:block absolute -bottom-10 right-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF69B4" d="M52.9,-46.9C66.4,-34,73.1,-13,71.4,7.6C69.7,28.3,59.6,48.6,43.8,59.8C28,71,6.5,73,-13.7,68.8C-34,64.6,-53,54.2,-65.9,37C-78.9,19.8,-85.8,-4.1,-80.1,-25C-74.4,-46,-56.1,-63.9,-37,-69.9C-17.8,-75.9,2.2,-70,22.1,-62.5C42,-55,39.3,-45.9,52.9,-34.9C66.4,-23.9,73.1,-13,71.4,7.6Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
