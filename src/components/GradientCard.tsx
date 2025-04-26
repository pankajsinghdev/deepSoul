import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const GradientCard: FC<Props> = ({ title, description }) => (
  <article className="flex flex-col rounded-2xl py-8  px-4 gap-4 justify-center items-center bg-gradient-to-br dark:from-blue-900 dark:to-black  from-pink-200 to-white   text-foreground">
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="text-center text-lg">{description}</p>
  </article>
);

export default GradientCard;
