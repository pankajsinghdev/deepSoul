import Image from "next/image";
import { FC } from "react";

interface Props {
  therapist: {
    pic: string;
    name: string;
    subject: string;
  };
}

const Therapist: FC<Props> = ({ therapist }) => (
  <article className="flex items-center gap-2">
    <div className="min-w-16 min-h-16">
      <Image
        width={64}
        height={64}
        quality={100}
        alt="therapist profile picture"
        src={therapist.pic}
        className=" h-16 w-16 rounded-full"
      />
    </div>
    <div className="flex-flex-col">
      <h2 className="text-lg font-semibold">{therapist.name}</h2>
      <p className="text-gray-400">{therapist.subject}</p>
    </div>
  </article>
);

export default Therapist;
