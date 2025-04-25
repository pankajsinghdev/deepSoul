import HeroCard from "@/components/HeroCard";
import { FC } from "react";

const heroes = [
  {
    title: "Peace of Mind",
    description: "Your mental wellbeing companion is here",
  },
  {
    title: "Mental Health Quiz",
    description: "Understand your emotional wellbeing",
  },
  {
    title: "Upcoming Therapy Session",
    description: "Today at 3:00 PM with Dr. Sarah.",
  },
  {
    title: "Daily Journal",
    description: "Take a moment to reflect on your feelings today",
  },
  {
    title: "Community Support",
    description: "Connect with others who understand",
  },
];

const Hero: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
      <div className="flex flex-col items-center gap-4 my-8 lg:justify-center lg:items-start">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gap-2">
          {"Your journey to"}
          <span className="bg-clip-text text-transparent  bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-800 ">
            {" inner peace "}
          </span>
          {"begins here"}
        </h1>
        <p className="text-lg text-gray-400 ">
          DeepSoul connects you with professional therapists, supportive
          community, and powerful self-help tools for your mental wellbeing
          journey.
        </p>
      </div>
      <div className="relative w-full m-4 max-w-6xl h-[500px]">
        <div className="absolute left-1/6 top-0 transform -translate-x-1/2">
          <HeroCard className="animate-float" hero={heroes[1]} />
        </div>
        <div className="absolute right-1/6 top-0 transform translate-x-1/2">
          <HeroCard className="animate-float" hero={heroes[2]} />
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <HeroCard hero={heroes[0]} />
        </div>

        <div className="absolute left-1/6 bottom-0 transform -translate-x-1/2">
          <HeroCard className="animate-float" hero={heroes[3]} />
        </div>
        <div className="absolute right-1/6 bottom-0 transform translate-x-1/2">
          <HeroCard className="animate-float" hero={heroes[4]} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
