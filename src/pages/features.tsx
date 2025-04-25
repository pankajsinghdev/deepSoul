import FeatureCards from "@/components/FeatureCards";
import { Book, Calendar, Heart, MessageCircleCode, User2 } from "lucide-react";
import { FC } from "react";

const features = [
  {
    icon: <Calendar size={40} />,
    title: "Therapy Booking",
    description:
      "Schedule sessions with licensed therapists who match your needs and preferences. Easy booking, rescheduling, and virtual sessions.",
  },
  {
    icon: <Heart size={40} />,
    title: "Self-help Exercises",
    description:
      "Access guided meditations, journaling prompts, breathing exercises, and personalized activities to build resilience and mindfulness.",
  },
  {
    icon: <User2 size={40} />,
    title: "Therapist Buddy",
    description:
      "Your assigned therapist keeps track of your progress, provides personalized exercises, and is available when you need guidance.",
  },
  {
    icon: <MessageCircleCode size={40} />,
    title: "Supportive Community",
    description:
      "Connect with others who understand what you're going through. Share experiences, offer support, and never feel alone in your journey.",
  },
  {
    icon: <Book size={40} />,
    title: "Wellness Resources",
    description:
      "Explore our extensive library of articles, blogs, audiobooks, and podcasts covering various mental health topics.",
  },
];

const Features: FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-4 my-8">
        <h1 className="text-4xl font-semibold">
          Your Complete Mental Wellness Solution
        </h1>
        <p className="text-lg text-gray-400 text-center">
          DeepSoul combines multiple approaches to provide comprehensive support
          for your mental wellbeing journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {features.map((feature) => {
          return (
            <div key={feature.title}>
              <FeatureCards feature={feature} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
