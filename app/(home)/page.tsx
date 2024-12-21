import React from 'react';
import { Hero } from '@/app/(home)/_components/hero';
import { OnboardSteps } from '@/app/(home)/_components/onboard-steps';
import { WhyRmax } from '@/app/(home)/_components/why-rmax';
import { EmpoweringServiceProviders } from '@/app/(home)/_components/empowering-service-providers';
import { Pricing } from '@/app/(home)/_components/pricing';
import { Connect } from '@/app/(home)/_components/connect';
import { Faq } from '@/app/(home)/_components/faq';
import { Footer } from '@/app/(home)/_components/footer';

const Page = () => {
  return (
    <>
      <Hero />
      <OnboardSteps />
      <WhyRmax />
      <EmpoweringServiceProviders />
      <Pricing />
      <Connect />
      <Faq />
      <Footer />
    </>
  );
};

export default Page;
