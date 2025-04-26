import Features from "@/pages/Features.page";
import Hero from "@/pages/Hero.page";
import Resources from "@/pages/Resources.page";
import Therapy from "@/pages/Therapy.page";

export default function Home() {
  return (
      <main className="h-fit">
        <section id="hero" className="pt-32 pb-20  overflow-hidden">
          <Hero />
        </section>
        <section id="features" className="py-20 overflow-hidden">
          <Features />{" "}
        </section>
        <section id="therapy" className="py-20 overflow-hidden p-2 bg-background">
          <Therapy />{" "}
        </section>
        <section
          id="resources"
          className="py-20 overflow-hidden p-2 bg-gradient-to-b dark:from-dark-purple dark:to-background from-cyan-100/2 to-white"
        >
          <Resources />{" "}
        </section>
      </main>
  );
}
