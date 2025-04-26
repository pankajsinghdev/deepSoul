import Button, { ButtonType } from "@/components/Button";
import GradientCard from "@/components/GradientCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Therapist from "@/components/therapy/Therapist";
import TherapyPoint from "@/components/therapy/TherapyPoint";
import { Calendar, Camera, Clock10, Phone } from "lucide-react";
import { FC } from "react";

interface Props {}

const Therapy: FC<Props> = (props) => {
  const therapyPoints = [
    {
      icon: <Calendar />,
      title: "Flexible Scheduling",
      description: "Book appointment that fit your busy life",
    },
    {
      icon: <Clock10 />,
      title: "Personalized Matching",
      description: "Book appointment that fit your busy life",
    },
    {
      icon: <Camera />,
      title: "Virtual Sessions",
      description: "Book appointment that fit your busy life",
    },
    {
      icon: <Phone />,
      title: "Direct communication",
      description: "Book appointment that fit your busy life",
    },
  ];

  const therapists = [
    {
      pic: "/therapist1.avif",
      name: "Dr. Sarah Johnson",
      subject: "Anxiety & Depression",
    },
    {
      pic: "/therapist2.avif",
      name: "Dr. Amara Patel",
      subject: "Relationship issues",
    },
    {
      pic: "/therapist3.avif",
      name: "Dr. Michel Chen",
      subject: "Trauma & PTSD",
    },
  ];
  return (
    <MaxWidthWrapper>
      <section className="lg:grid lg:grid-cols-2 my-10 gap-2">
        <div>
          <Button
            disabled
            className="font-bold rounded-full bg-gradient-to-br px-4 py-2 from-pink-200 to-white text-blue-500"
            buttonType={ButtonType.ROUNDED}
          >
            Professional Support
          </Button>
          <h1 className="my-6 text-4xl font-semibold">
            Connect with Licensed Therapists
          </h1>
          <p className="text-xl text-gray-500">
            Find the right therapist who understands your unique needs. Our
            platform makes it easy to schedule sessions, whether in-person or
            virtual, so you can get the support you need, when you need it.
          </p>
          <section aria-labelledby="therapy-points-heading" className="my-8">
            <h2 id="therapy-points-heading" className="sr-only">
              Therapy Features
            </h2>
            <div className="my-8">
              {therapyPoints.map((therapyPoint) => {
                return (
                  <TherapyPoint
                    key={therapyPoint.title}
                    therapyPoint={therapyPoint}
                  />
                );
              })}
            </div>
          </section>
        </div>
        <div>
          <div className="my-8">
            <GradientCard
              title="Our Therapist"
              description="Our network includes hundreds of licensed professionals ready to support you."
            />
          </div>
          <section aria-labelledby="therapists-heading" className="m-6">
            <h2 id="therapists-heading" className="sr-only">
              Therapist Profiles
            </h2>
            <div className="grid grid-cols-2 gap-4 m-6">
              {therapists.map((therapist) => {
                return <Therapist key={therapist.name} therapist={therapist} />;
              })}
              <div className="flex">
                <GradientCard
                  title="+200"
                  description="Licensed Therapists ready to help"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Therapy;
