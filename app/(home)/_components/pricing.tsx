import React from "react";
import { SectionHeader } from "@/app/(home)/_components/section-header";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  premiumPricingCardContent,
  starterPricingCardContent,
} from "@/app/(home)/constant";
import Link from "next/link";
import { GetStartedButton } from "@/app/(home)/_components/get-started-button";

const PricingCard = ({
  heading,
  price,
  items,
}: IPricingCard): React.ReactNode => {
  return (
    <div
      className={
        "col-span-1 h-[567px] w-[327px] rounded-lg border border-border-primary-light p-8 font-roboto"
      }
    >
      <h3
        className={"mb-8 text-start font-semibold tracking-widest text-primary"}
      >
        {heading}
      </h3>
      <div className={"mb-10 flex flex-col gap-y-3 text-start"}>
        <p>
          <span className={"text-2xl font-bold"}>$</span>{" "}
          <span className={"text-6xl font-bold"}>{price}</span> / month
        </p>
        <p className={"text-text-primary-foreground"}>billed monthly</p>
      </div>
      <div className={"mb-6 flex flex-col gap-y-4"}>
        {items?.map(
          (eachItem: items, index: number): React.ReactNode => (
            <p
              key={index}
              className={cn(
                "flex gap-x-4",
                eachItem.provided === false && "text-[#949494]",
              )}
            >
              {eachItem.provided === false ? (
                <X color={"#949494"} strokeWidth={2} size={22} />
              ) : (
                <Check color={"#68D585"} size={22} strokeWidth={2} />
              )}
              {eachItem.item}
            </p>
          ),
        )}
      </div>
      <GetStartedButton />
      <p className={"mt-4"}>No Credit Card Required</p>
    </div>
  );
};

export const Pricing = () => {
  return (
    <main className={"mx-auto mb-20 h-screen w-full max-w-screen-lg"}>
      <div
        className={
          "mx-auto flex w-full max-w-screen-md flex-col items-center gap-y-4"
        }
      >
        <SectionHeader
          heading={" Choose Plan That’s Right For You"}
          description={
            "Simple and transparent pricing. Start for free, upgrade when you love it."
          }
        />
        <p className={"font-roboto text-text-emphasize-primary"}>
          30 day free trial in a button
        </p>
        <p className={"font-roboto"}>
          Running a <span className={"font-bold"}>Growth Business</span> or{" "}
          <span className={"font-bold"}>Enterprise</span>? Let&apos;s connect -{" "}
          <button
            className={"h-8 w-24 rounded-lg bg-primary text-sm text-white"}
          >
            Talk to Sales
          </button>
        </p>
        <div
          className={
            "mt-5 flex w-full items-center justify-center gap-x-4 font-roboto"
          }
        >
          <p>Monthly</p>
          <button></button>
          <p>Yearly</p>
          <p
            className={
              "inline-flex h-7 w-24 items-center justify-center rounded-xl bg-secondary text-xs font-bold tracking-widest text-primary"
            }
          >
            SAVE 25%
          </p>
        </div>
        <div className={"mt-10 grid w-full grid-cols-2 justify-between"}>
          <PricingCard
            heading={starterPricingCardContent.heading}
            price={starterPricingCardContent.price}
            items={starterPricingCardContent.items}
          />
          <PricingCard
            heading={premiumPricingCardContent.heading}
            price={premiumPricingCardContent.price}
            items={premiumPricingCardContent.items}
          />
        </div>

        <Link
          href={"/"}
          className={"font-roboto text-lg text-text-navigation-blue underline"}
        >
          Explore In-Depth Differences
        </Link>
      </div>
    </main>
  );
};
