import { FC } from "react";
import cx from "classnames";

interface Props {
  hero: {
    title: string;
    description: string;
  };
  className?: string;
}
const HeroCard: FC<Props> = (props) => {
  const { hero, className } = props;
  return (
    <div
      style={{
        animationDelay: "0.1s",
      }}
      className={cx(
        "bg-light-background rounded-xl shadow-lg flex flex-col items-center dark:bg-slate-800/90 backdrop-blur-sm duration-1000 p-5 w-56",
        className
      )}
    >
      <h1 className="text-lg font-semibold">{hero.title}</h1>
      <p className="text-gray-400">{hero.description}</p>
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-800 mt-3 rounded-full"></div>
    </div>
  );
};

export default HeroCard;
