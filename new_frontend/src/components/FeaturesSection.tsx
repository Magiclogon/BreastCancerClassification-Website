
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, FileText, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FileText className="w-10 h-10 text-pink-500" />,
              title: "Upload Report",
              description: "Simply upload your breast imaging medical report text or file."
            },
            {
              icon: <Stethoscope className="w-10 h-10 text-pink-500" />,
              title: "AI Analysis",
              description: "Our specialized model analyzes the report to identify key diagnostic markers."
            },
            {
              icon: <ArrowRight className="w-10 h-10 text-pink-500" />,
              title: "Get BIRADS Classification",
              description: "Receive accurate BIRADS category to support clinical decision making."
            }
          ].map((feature, index) => (
            <Card key={index} className="border-pink-100 card-hover-effect pink-ribbon-shadow">
              <CardContent className="pt-6">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
