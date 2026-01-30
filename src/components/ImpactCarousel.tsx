
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, User, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImpactStat {
  icon: any;
  value: string;
  label: string;
}

const stats: ImpactStat[] = [
  { icon: User, value: "5,000+", label: "Lives Touched" },
  { icon: MapPin, value: "20", label: "Rural Communities Served" },
  { icon: Award, value: "95%", label: "Skill Acquisition Success" },
];

export const ImpactCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % stats.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + stats.length) % stats.length);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8">
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl overflow-hidden min-h-[200px] flex items-center justify-center">
        
        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-4 p-2 text-white/50 hover:text-white transition-colors z-10">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={next} className="absolute right-4 p-2 text-white/50 hover:text-white transition-colors z-10">
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slides */}
        <div className="text-center transition-all duration-500 transform w-full">
            {stats.map((stat, index) => (
                <div 
                    key={index} 
                    className={`transition-all duration-500 absolute inset-0 flex flex-col items-center justify-center ${
                        index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"
                    }`}
                >
                    <div className="bg-accent/20 p-4 rounded-full mb-4">
                        <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-5xl font-bold text-white mb-2">{stat.value}</h3>
                    <p className="text-xl text-white/80">{stat.label}</p>
                </div>
            ))}
            {/* Spacer to maintain height since children are absolute */}
            <div className="invisible h-32 w-full"></div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {stats.map((_, i) => (
                <button 
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                        i === currentIndex ? "bg-accent w-4" : "bg-white/30"
                    }`}
                />
            ))}
        </div>
      </div>
    </div>
  );
};
