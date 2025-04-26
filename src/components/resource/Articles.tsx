import { FC } from "react";
import Image from "next/image";

interface Props {
  article: {
    pic: string;
    tag: string;
    title: string;
  };
}

const Article: FC<Props> = ({ article }) => (
  <article className="bg-background rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 ease-in-out">
    <Image
      width={36}
      quality={100}
      height={192}
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
