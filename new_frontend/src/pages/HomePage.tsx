import { Button } from "@/components/ui/button";
import { Ribbon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-gradient px-4">
      <div className="relative w-full max-w-4xl mx-auto text-center">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <Ribbon className="h-24 w-24 text-pink-500 fill-pink-100" />
        </div>
       
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mt-16 mb-11">
          Classification BI-RADS du Cancer Du Sein
        </h1>
       
        <Button
          size="lg"
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg"
          onClick={() => navigate('/analyser')}
        >
          Analyser
        </Button>
      </div>

    </div>
  );
};

export default HomePage;