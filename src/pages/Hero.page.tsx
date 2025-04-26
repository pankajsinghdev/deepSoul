import HeroCard from "@/components/hero/HeroCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
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
    <MaxWidthWrapper>
      <section className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        <div className="flex flex-col items-center gap-4 my-8 lg:justify-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-start font-bold tracking-tight gap-2">
            {"Your journey to"}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-800 ">
              {" inner peace "}
            </span>
            {"begins here"}
          </h1>
          <p className="text-xl text-gray-400 ">
            DeepSoul connects you with professional therapists, supportive
            community, and powerful self-help tools for your mental wellbeing
            journey.
          </p>
        </div>
        <div className="md:relative mx-4 md:max-w-6xl md:h-[500px] flex flex-col items-stretch gap-5 md:w-full">
          <div className="md:absolute md:left-1/6 md:top-0 md:transform md:-translate-x-1/2 ">
            <HeroCard className="animate-float" hero={heroes[1]} />
          </div>
          <div className="md:absolute md:right-1/6 md:top-0 md:transform md:translate-x-1/2">
            <HeroCard className="animate-float" hero={heroes[2]} />
          </div>

          <div className="md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <HeroCard hero={heroes[0]} />
          </div>

          <div className="md:absolute md:left-1/6 md:bottom-0 md:transform md:-translate-x-1/2">
            <HeroCard className="animate-float" hero={heroes[3]} />
          </div>
          <div className="md:absolute md:right-1/6 md:bottom-0 md:transform md:translate-x-1/2">
            <HeroCard className="animate-float" hero={heroes[4]} />
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
