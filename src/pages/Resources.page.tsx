import Button, { ButtonType } from "@/components/Button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Article from "@/components/resource/Articles";
import ResourceCard from "@/components/resource/ResourceCard";
import WeaklyArticleCard from "@/components/resource/WeeklyArticleCard";
import { Book, Building2Icon, File, Play } from "lucide-react";
import { FC } from "react";

const Resources: FC = () => {
  const resources = [
    {
      icon: <File />,
      heading: "Articles & Blogs",
      subHeading: "200+ resources",
      description: "Expert-written pieces on various mental health topics",
    },
    {
      icon: <Book />,
      heading: "Audiobooks",
      subHeading: "50+ titles",
      description: "Listen to books on personal growth and mental wellness",
    },
    {
      icon: <Play />,
      heading: "Podcasts",
      subHeading: "100+ episodes",
      description: "Engaging discussions with mental health professionals",
    },
    {
      icon: <Building2Icon />,
      heading: "Research & News",
      subHeading: "Updated weekly",
      description: "Latest findings and news in mental health science",
    },
  ];

  const articles = [
    {
      pic: "/article1.avif",
      tag: "Mental Health",
      title: "Understanding Anxiety: Causes and Management Techniques",
    },
    {
      pic: "/article2.avif",
      tag: "Mindfulness",
      title: "The Power of Meditation in Daily Life",
    },
    {
      pic: "/article3.avif",
      tag: "Personal Growth",
      title: "Building Resilience in Challenging Times",
    },
  ];

  const weeklyArticles = [
    {
      title: "New Research Study",
      description: "The effects of meditation on stress reduction",
    },
    {
      title: "Latest Podcast",
      description: "Breaking the stigma around mental health",
    },
  ];
  return (
    <MaxWidthWrapper>
      <section className="p-2 my-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <Button
            disabled
            className="font-bold rounded-full px-4 py-2 text-blue-500 bg-gradient-to-br from-pink-200 to-white dark:bg-gradient-to-none dark:bg-foreground "
            buttonType={ButtonType.ROUNDED}
          >
            Knowledge Library
          </Button>
          <h1 className="text-4xl font-semibold text-center">
            Expand Your Understanding
          </h1>
          <p className="text-xl text-center">
            Explore our extensive collection of articles, blogs, audiobooks, and
            podcasts covering various mental health and wellness topics.
          </p>
        </div>

        <section aria-labelledby="resource-cards-heading" className="my-10">
          <h2 id="resource-cards-heading" className="sr-only">
            Resource Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-6">
            {resources.map((resource) => {
              return (
                <ResourceCard key={resource.heading} resource={resource} />
              );
            })}
          </div>
        </section>

        <section aria-labelledby="articles-heading" className="my-10">
          <h2 id="articles-heading" className="sr-only">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6">
            {articles.map((article) => {
              return <Article key={article.title} article={article} />;
            })}
          </div>
        </section>

        <div className="flex h-68 rounded-2xl p-4 xl:p-8 gap-4  items-center bg-gradient-to-br dark:from-blue-900 dark:to-black from-pink-200 to-white  text-foreground">
          <div>
            <h1 className="text-2xl font-semibold ">
              {"Weekly Wellness Digest"}
            </h1>
            <p className=" text-lg">
              {
                "Stay updated with the latest articles, research, and wellness tips delivered straight to your inbox."
              }
            </p>
          </div>
          <div className="hidden lg:flex gap-4 w-1/2 relative ">
            <div className="md:absolute right-3/10 top-0 transform translate-x-1/2">
              <WeaklyArticleCard article={weeklyArticles[1]} />
            </div>
            <div className="absolute left-1/6 bottom-0 transform -translate-x-1/2 ">
              <WeaklyArticleCard article={weeklyArticles[0]} />
            </div>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Resources;
