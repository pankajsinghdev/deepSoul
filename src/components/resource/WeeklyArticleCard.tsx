import { FC } from "react";

interface Props {
  article: {
    title: string;
    description: string;
  };
}
const WeaklyArticleCard: FC<Props> = ({ article }) =>(
    <article className="bg-background rounded-2xl p-4 w-60 animate-float">
      <h2 className="text-lg font-bold">{article.title}</h2>
      <p className="text-gray-500">{article.description}</p>
    </article>
  );

export default WeaklyArticleCard;
