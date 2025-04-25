import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Features from "@/pages/features";
import Hero from "@/pages/hero";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="h-fit">
          <section id="hero" className="pt-32 pb-20  overflow-hidden">
            <Hero />
          </section>
          <section id="features" className="py-20 overflow-hidden">
            <Features />{" "}
          </section>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
