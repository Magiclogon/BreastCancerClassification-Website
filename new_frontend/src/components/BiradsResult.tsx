import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangleIcon, CheckCircleIcon, InfoIcon, AlertCircleIcon } from "lucide-react";

const biradsLevels = [
  {
    level: 0,
    title: "BIRADS 0",
    description: "Évaluation incomplète",
    action: "Imagerie complémentaire requise",
    color: "text-slate-500",
    bgColor: "bg-slate-50",
    icon: InfoIcon,
  },
  {
    level: 1,
    title: "BIRADS 1",
    description: "Négatif",
    action: "Dépistage de routine",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    icon: CheckCircleIcon,
  },
  {
    level: 2,
    title: "BIRADS 2",
    description: "Lésion bénigne",
    action: "Dépistage de routine",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    icon: CheckCircleIcon,
  },
  {
    level: 3,
    title: "BIRADS 3",
    description: "Probablement bénin",
    action: "Suivi à court terme",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    icon: AlertCircleIcon,
  },
  {
    level: 4,
    title: "BIRADS 4",
    description: "Anomalie suspecte",
    action: "Biopsie à considérer",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    icon: AlertTriangleIcon,
  },
  {
    level: 5,
    title: "BIRADS 5",
    description: "Fortement évocateur de malignité",
    action: "Biopsie recommandée",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    icon: AlertTriangleIcon,
  },
  {
    level: 6,
    title: "BIRADS 6",
    description: "Malignité confirmée par biopsie",
    action: "Consultation chirurgicale",
    color: "text-rose-600",
    bgColor: "bg-rose-50",
    icon: AlertTriangleIcon,
  },
];

interface BiradsResultProps {
  biradsLevel: number | null;
}

const BiradsResult = ({ biradsLevel }: BiradsResultProps) => {
  if (biradsLevel === null) return null;
  
  const biradInfo = biradsLevels.find((b) => b.level === biradsLevel) || biradsLevels[0];
  const Icon = biradInfo.icon;
  
  const dots = biradsLevels.map((level, index) => {
    const isActive = level.level === biradsLevel;
    const dotColorClass = isActive ? biradInfo.color.replace('text-', 'bg-') : "bg-gray-200";
    const sizes = isActive 
      ? "w-8 h-8 text-white font-medium shadow-md" 
      : "w-6 h-6 text-gray-400";
    
    return (
      <div key={index} className="flex flex-col items-center">
        <div className={`${dotColorClass} ${sizes} rounded-full flex items-center justify-center`}>
          {level.level}
        </div>
      </div>
    );
  });

  return (
    <Card className={`overflow-hidden shadow-lg border-0 ${biradInfo.bgColor} rounded-xl`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-5">
          <div className={`${biradInfo.color} p-3 rounded-full bg-white shadow-sm`}>
            <Icon size={28} strokeWidth={2.5} />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2">
              <h3 className={`font-bold text-xl ${biradInfo.color}`}>{biradInfo.title}</h3>
              <span className={`text-sm font-medium ${biradInfo.color} px-4 py-1.5 rounded-full ${biradInfo.bgColor} border border-current shadow-sm`}>
                Niveau {biradsLevel}
              </span>
            </div>
            
            <p className="text-gray-800 font-medium text-lg">{biradInfo.description}</p>
            <p className="text-gray-600 mt-2 flex items-center">
              <span className="mr-1">•</span> {biradInfo.action}
            </p>
            
            <div className="mt-8">
              <div className="flex justify-between items-center">
                {dots}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BiradsResult;