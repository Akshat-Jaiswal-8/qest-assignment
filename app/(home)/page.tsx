import React from "react";
import { Hero } from "@/app/(home)/_components/hero";
import { OnboardSteps } from "@/app/(home)/_components/onboard-steps";
import { WhyRmax } from "@/app/(home)/_components/why-rmax";

const Page = () => {
  return (
    <>
      <Hero />
      <OnboardSteps />
      <WhyRmax />
    </>
  );
};

export default Page;
