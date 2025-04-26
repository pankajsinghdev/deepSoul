import { FC } from "react";
import Button from "../Button";

interface Props {
  article: {
    pic: string;
    tag: string;
    title: string;
  };
}

const Article: FC<Props> = ({ article }) =>  (
    <article className="bg-background rounded-2xl">
      <img
        src={article.pic}
        className="w-full h-48 object-cover rounded-t-2xl"
        alt={article.title}
      />
      <div className="p-5 space-y-3">
        <span className="text-cyan-600 bg-cyan-100 dark:bg-foreground font-semibold px-2 rounded-xl inline-block">
          {article.tag}
        </span>
        <h2 className="text-xl font-semibold">{article.title}</h2>
      </div>
    </article>
  );

export default Article;
