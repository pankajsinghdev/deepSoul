import { FC, ReactElement } from "react";

interface Props {
  therapyPoint: {
    icon: ReactElement;
    title: string;
    description: string;
  };
}

const TherapyPoint: FC<Props> = ({ therapyPoint }) => (
  <article className="flex items-center gap-2 m-2 py-1">
    <span
      className="w-fit dark:bg-foreground bg-cyan-100 text-cyan-400 p-2 rounded-full"
      aria-hidden="true"
    >
      {therapyPoint.icon}
    </span>
    <div>
      <h1 className="font-lg font-semibold">{therapyPoint.title}</h1>
      <p className="text-gray-400">{therapyPoint.description}</p>
    </div>
  </article>
);

export default TherapyPoint;
