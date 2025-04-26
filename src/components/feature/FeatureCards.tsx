import { FC, ReactElement } from "react";

interface Props {
  feature: {
    icon: ReactElement;
    title: string;
    description: string;
  };
}

const FeatureCards: FC<Props> = ({ feature }) => {
  const headingId = `feature-card-title-${feature.title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <article
      aria-labelledby={headingId}
      className="w-full bg-background rounded-lg p-4 shadow-2xl border border-gray-200"
    >
      <div className="mb-4 w-fit  bg-gradient-to-br from-pink-200 to-white light text-cyan-400 p-2 rounded-xl dark:bg-light-background dark:bg-none">
        {feature.icon}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 text-foreground">
          {feature.title}
        </h2>
        <p className="text-gray-500">{feature.description}</p>
      </div>
    </article>
  );
};

export default FeatureCards;
