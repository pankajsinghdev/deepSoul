import { FC, ReactElement } from "react";

interface Props {
  resource: {
    icon: ReactElement;
    heading: string;
    subHeading: string;
    description: string;
  };
}

const ResourceCard: FC<Props> = ({ resource }) => (
  <article className="bg-background py-4 px-6 rounded-2xl shadow-2xl fly-in">
    <span
      className="mb-4 w-fit my-4 bg-cyan-100 dark:bg-foreground text-cyan-400 p-2 rounded-xl block"
      aria-hidden="true"
    >
      {resource.icon}
    </span>
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">{resource.heading}</h2>
      <h3 className="text-lg text-cyan-600">{resource.subHeading}</h3>
      <p className="text-gray-400">{resource.description}</p>
    </div>
  </article>
);

export default ResourceCard;
