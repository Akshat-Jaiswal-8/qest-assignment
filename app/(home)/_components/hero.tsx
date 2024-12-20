import React from "react";
import { Navbar } from "@/app/(home)/_components/navbar";
import { ArrowRight } from "lucide-react";
import { features } from "@/app/(home)/constant";

const FeatureButton = ({ feature }: { feature: string }): React.ReactNode => (
  <button className="h-12 w-[13.75rem] rounded-lg border text-xl font-medium">
    {feature}
  </button>
);

export const Hero = () => {
  return (
    <section className={"h-screen w-full"}>
      <Navbar />

      <main>
        <div className={"mx-auto mt-20 max-w-screen-md"}>
          <div className={"mx-auto mb-10 flex h-12 w-[456px] gap-x-1"}>
            <div
              className={
                "m-auto flex h-full items-center rounded-l-lg border px-2 font-urbanist text-base font-bold"
              }
            >
              <div className={"text-end leading-tight"}>
                AI
                <p className={"pt-0"}>
                  R<span className={"text-text-emphasize-primary"}>Max</span>
                </p>
              </div>
            </div>
            <div
              className={
                "text-text-placeholder font-roboto flex flex-1 items-center rounded-r-lg border pl-4 text-base font-medium"
              }
            >
              Curious? Let AI Uncover the Answers!
            </div>
          </div>

          <div className={"my-20 flex flex-col items-center gap-y-8"}>
            <h1
              className={
                "flex flex-col text-center text-6xl font-bold leading-snug"
              }
            >
              <span className={"text-text-heading-primary"}>
                Maximize Your Impact
              </span>
              <span className={"text-primary"}>
                Business with{" "}
                <span className={"text-text-heading-primary"}>R</span>
                <span className={"text-text-emphasize-primary"}>Max</span>
              </span>
            </h1>
            <p
              className={
                "text-text-primary-foreground font-roboto text-center text-base font-normal leading-normal"
              }
            >
              Enhance your business with Rmax&apos;s all-in-one
              platform—streamlining client <br /> engagement, automating
              workflows, and fueling growth.
            </p>
            <div className={"mx-auto mt-5 flex gap-x-4"}>
              <button
                aria-label="Get Started with RMax"
                className={
                  "bg-primary font-roboto flex h-12 w-32 items-center justify-center gap-x-2 rounded-lg text-sm font-semibold text-white"
                }
              >
                Get Started <ArrowRight size={20} strokeWidth={2} />
              </button>
              <button
                className={
                  "font-roboto flex h-12 w-32 items-center justify-center gap-x-2 rounded-lg border text-sm font-medium"
                }
              >
                Book A Demo
              </button>
            </div>
          </div>
        </div>

        <div className={"mx-auto flex w-full max-w-screen-lg justify-between"}>
          {features.map((feature: string, index: number) => (
            <FeatureButton key={index} feature={feature} />
          ))}
        </div>
      </main>
    </section>
  );
};
