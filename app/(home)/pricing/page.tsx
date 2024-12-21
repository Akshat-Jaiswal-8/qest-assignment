import React from "react";
import { SectionHeader } from "@/app/(home)/_components/section-header";
import { Navbar } from "@/app/(home)/_components/navbar";
import { pricingPlansContent } from "@/app/(home)/constant";
import { GetStartedButton } from "@/app/(home)/_components/get-started-button";
import { Faq } from "@/app/(home)/_components/faq";
import { Footer } from "@/app/(home)/_components/footer";

const PricingTable = ({
  pricingPlansContent,
}: {
  pricingPlansContent: IPricingPlanContent[];
}) => {
  return (
    <div className="grid-rows-auto grid grid-cols-3 gap-y-6 text-start">
      {pricingPlansContent.map(
        (pricingPlan: IPricingPlanContent, index: number): React.ReactNode => (
          <React.Fragment key={index}>
            <p className="text-lg text-text-primary-foreground">
              {pricingPlan.label}
            </p>
            <p className="w-1/2 border-b border-border-primary-light pb-3 text-lg text-text-primary-foreground">
              {pricingPlan.starter}
            </p>
            <p className="w-1/2 border-b border-border-primary-light text-lg text-text-primary-foreground">
              {pricingPlan.premium}
            </p>
          </React.Fragment>
        ),
      )}
    </div>
  );
};

const PricingPage = () => {
  return (
    <section className={"h-full w-full"}>
      <Navbar />
      <main className={"mx-auto my-20 h-full w-full max-w-screen-lg"}>
        <div
          className={
            "mx-auto flex w-full max-w-screen-md flex-col items-center gap-y-4"
          }
        >
          <SectionHeader
            heading={" Flexible Plans, Transparent pricing"}
            description={"Find the Perfect Fit for You."}
          />
        </div>
        <p className={"mt-2 text-center font-roboto text-primary"}>
          30-day free trial with money-back guarantee.
        </p>

        <div
          className={"mx-auto mb-28 mt-12 w-full max-w-screen-lg font-roboto"}
        >
          <h1 className={"text-center text-3xl font-semibold"}>
            Compare our plans
          </h1>
          <div className={"mt-16 grid w-full grid-cols-3"}>
            <p className={"text-lg font-medium"}>Features</p>
            <div className={"flex flex-col gap-y-2"}>
              <h3 className={"text-lg font-medium"}>Starter</h3>
              <p className={"text-text-primary-foreground"}>
                $17/month, billed <br /> monthly
              </p>
            </div>
            <div className={"flex flex-col gap-y-2"}>
              <h3 className={"text-lg font-medium"}>Premium</h3>
              <p className={"text-text-primary-foreground"}>
                $88/month, billed <br /> monthly
              </p>
            </div>
          </div>
          <div>
            <h3 className={"my-10 text-lg font-medium tracking-wide"}>
              Basic Management
            </h3>
            <PricingTable pricingPlansContent={pricingPlansContent} />
            <div className={"mt-10 grid grid-cols-3"}>
              <div className={"col-start-2"}>
                <GetStartedButton />
                <p className={"mt-2 text-text-primary-foreground"}>
                  No Credit card required
                </p>
              </div>
              <div className={"col-start-3"}>
                <GetStartedButton />
                <p className={"mt-2 text-text-primary-foreground"}>
                  No Credit card required
                </p>
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </main>
      <Footer />
    </section>
  );
};

export default PricingPage;
