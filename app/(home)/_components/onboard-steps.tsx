import React from "react";
import Image from "next/image";
import { onboardingStepsContent } from "@/app/(home)/constant";
import { SectionHeader } from "@/app/(home)/_components/section-header";

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
      <h2 className={"mt-4 font-roboto text-2xl font-medium"}>{heading}</h2>
      <p
        className={
          "mt-6 font-roboto text-base font-normal text-text-primary-foreground"
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
        <SectionHeader
          heading={" Onboard business in 3 simple steps"}
          description={
            "Quick assisted onboarding with 30day free trial. No credit card needed."
          }
        />
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
