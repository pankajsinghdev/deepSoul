import { FC, ReactElement } from "react";

interface Props {
  feature: {
    icon: ReactElement;
    title: string;
    description: string;
  };
}

const FeatureCards: FC<Props> = (props) => {
  const { feature } = props;
  return (
    <div className="w-full bg-card rounded-lg p-4 shadow-2xl border border-gray-800">
      <div className="mb-4 w-fit bg-light-background text-cyan-400 p-2 rounded-xl">
        {feature.icon}
      </div>
      <div>
        <h1 className="text-xl font-semibold mb-2 text-foreground">
          {feature.title}
        </h1>
        <p className="text-gray-400">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCards;
