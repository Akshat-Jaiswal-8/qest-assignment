import React from "react";
import Image from "next/image";
import { onboardingStepsContent } from "@/app/(home)/constant";

const StepsContent = ({
  heading,
  description,
  icon,
}: IOnboardingStepsContent): React.ReactNode => {
  return (
    <div className={"flex flex-col items-center text-center"}>
      <Image
        src={icon}
        quality={100}
        alt={"preset-profile"}
        width={240}
        height={240}
        className={"h-72 w-96"}
      />
      <h2 className={"font-roboto mt-4 text-2xl font-medium"}>{heading}</h2>
      <p
        className={
          "text-text-primary-foreground font-roboto mt-6 text-base font-normal"
        }
      >
        {description}
      </p>
    </div>
  );
};

export const OnboardSteps = (): React.ReactNode => {
  return (
    <section className={"container mx-auto mt-4 h-[80vh] font-urbanist"}>
      <div className={"flex flex-col items-center gap-y-4"}>
        <h1 className={"text-5xl font-bold"}>
          Onboard business in 3 simple steps
        </h1>
        <p
          className={
            "font-roboto text-text-primary-foreground text-base font-normal"
          }
        >
          Quick assisted onboarding with 30day free trial. No credit card
          needed.
        </p>
      </div>
      <div
        className={
          "mx-auto grid h-full max-h-[60vh] w-full max-w-screen-lg grid-cols-3 items-center justify-between gap-x-10"
        }
      >
        {onboardingStepsContent.map(
          (onboardingSteps: IOnboardingStepsContent, index: number) => (
            <StepsContent
              key={index}
              heading={onboardingSteps.heading}
              description={onboardingSteps.description}
              icon={onboardingSteps.icon}
            />
          ),
        )}
      </div>
    </section>
  );
};
