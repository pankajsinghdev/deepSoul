import { FC } from "react";
import cx from "classnames";

interface Props {
  hero: {
    title: string;
    description: string;
  };
  className?: string;
}
const HeroCard: FC<Props> = ({ hero, className }) =>  (
    <article
      className={cx(
        "bg-background w-full rounded-xl shadow-lg flex flex-col items-center dark:bg-slate-800/90 backdrop-blur-sm duration-1000 p-5 md:w-56",
        className
      )}
    >
      <h2 className="text-lg font-semibold">{hero.title}</h2>
      <p className="text-gray-500">{hero.description}</p>
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-800 mt-3 rounded-full"></div>
    </article>
  );


export default HeroCard;
