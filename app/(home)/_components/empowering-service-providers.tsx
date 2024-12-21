"use client";
import React from "react";
import { SectionHeader } from "@/app/(home)/_components/section-header";
import { Carousel } from "@/app/(home)/_components/carousel";

export const EmpoweringServiceProviders = () => {
  return (
    <section className={"container mx-auto mt-20 h-screen pt-4 font-urbanist"}>
      <main className={"mx-auto h-full w-full max-w-screen-lg"}>
        <div
          className={
            "mx-auto flex w-full max-w-screen-md flex-col items-center gap-y-4 text-center"
          }
        >
          <SectionHeader
            heading={" Empowering Service Providers Across Industries"}
            description={
              "Whether you're in sports, education, wellness, household services, or niche markets, our technology simplifies your business operations, making it easier for you to focus on what you do best."
            }
          />
        </div>
        <div className={"grid grid-cols-3 mt-16"}>
        {[...Array(3)].map((each ,index)=> (
        <Carousel
          key={index}
          image={"sports.png"}
          heading={"Sports"}
          description={"From fitness studios to sports academies, Rmax empowers sports businesses"}
        />
        ))}
        </div>
      </main>
    </section>
  );
};
