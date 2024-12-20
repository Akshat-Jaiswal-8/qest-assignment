import React from "react";
import { SectionHeader } from "@/app/(home)/_components/section-header";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RMaxFeaturesContent } from "@/app/(home)/constant";

const RMaxFeaturesCard = ({
  heading,
  description,
  icon,
  imageAtTop,
  image,
  className,
}: IRMaxFeaturesCardProps): React.ReactNode => {
  return (
    <div className={cn("h-fit w-80 bg-[#FAFAFA]", className)}>
      <div
        className={
          "border-border-primary-light flex flex-col items-center justify-around gap-y-4 rounded-lg border px-4 py-6"
        }
      >
        {icon && <Image src={"/" + icon} alt={icon} height={32} width={32} />}
        {image && imageAtTop && (
          <Image
            quality={100}
            src={"/" + image}
            alt={image}
            height={320}
            width={320}
          />
        )}
        <h1
          className={
            "font-roboto text-text-primary text-center text-xl font-semibold"
          }
        >
          {heading}
        </h1>
        <p
          className={
            "font-roboto text-text-primary-foreground text-center text-sm font-normal"
          }
        >
          {description}
        </p>
        <Link
          href={"/"}
          className={
            "text-text-navigation-blue font-roboto flex items-center gap-x-1 text-base font-normal"
          }
        >
          View Details <ChevronRight size={16} strokeWidth={2} />
        </Link>
        {image && !imageAtTop && (
          <Image
            quality={100}
            src={"/" + image}
            alt={image}
            height={320}
            width={320}
          />
        )}
      </div>
    </div>
  );
};

export const WhyRmax = (): React.ReactNode => {
  return (
    <section className={"container mx-auto mt-4 h-screen font-urbanist"}>
      <main className={"mx-auto h-full w-full max-w-screen-lg"}>
        <div
          className={"flex w-full flex-col items-center gap-y-4 text-center"}
        >
          <SectionHeader
            heading={"Why RMax?"}
            description={
              "RMax is designed to simplify and transform the way service businesses operate. From onboarding, scheduling and billing to client management, payments and growth, Rmax integrates everything in one easy-to-use platform connecting all the stake holders."
            }
          />
        </div>
        <div className="mt-20 grid auto-rows-min grid-cols-3 gap-6">
          {RMaxFeaturesContent.map(
            (feature: IRMaxFeaturesCardProps, index: number) => (
              <RMaxFeaturesCard
                key={index}
                heading={feature.heading}
                description={feature.description}
                icon={feature.icon}
                image={feature.image}
                imageAtTop={feature.imageAtTop}
                className={feature.className}
              />
            ),
          )}
        </div>
      </main>
    </section>
  );
};
