import React from 'react';
import { SectionHeader } from '@/app/(home)/_components/section-header';
import { ArrowRight, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { premiumPricingCardContent, starterPricingCardContent } from '@/app/(home)/constant';
import Link from 'next/link';


const PricingCard = ({ heading, price, items }: IPricingCard): React.ReactNode => {
  return (
    <div className={'h-[567px] border border-border-primary-light rounded-lg font-roboto w-[327px] p-8 col-span-1'}>
      <h3 className={'text-primary font-semibold  tracking-widest text-start mb-8'}>{heading}</h3>
      <div className={'flex flex-col gap-y-3 text-start  mb-10'}>
        <p><span className={'font-bold text-2xl'}>$</span> <span className={'font-bold text-6xl'}>{price}</span> / month
        </p>
        <p className={'text-text-primary-foreground'}>billed monthly</p>
      </div>
      <div className={'flex flex-col gap-y-4 mb-6'}>
        {items?.map((eachItem: items, index: number): React.ReactNode => (
          <p key={index} className={cn('flex gap-x-4', eachItem.provided === false && 'text-[#949494]')}>
            {eachItem.provided === false ? <X color={'#949494'} strokeWidth={2} size={22} /> :
              <Check color={'#68D585'} size={22} strokeWidth={2} />}
            {eachItem.item}
          </p>
        ))}
      </div>
      <button type={'button'}
              className={'w-[205px] cursor-pointer flex justify-between px-5 items-center h-14 border font-bold rounded-lg bg-secondary text-primary'}>
        Get Started
        <ArrowRight strokeWidth={2} />
      </button>
      <p className={'mt-4'}>No Credit Card Required</p>
    </div>
  );
};

export const Pricing = () => {
  return (
    <main className={'mx-auto h-screen w-full max-w-screen-lg mb-20'}>
      <div
        className={
          'mx-auto flex w-full max-w-screen-md flex-col items-center gap-y-4 '
        }
      >
        <SectionHeader
          heading={' Choose Plan That’s Right For You'}
          description={
            'Simple and transparent pricing. Start for free, upgrade when you love it.'
          }
        />
        <p className={'text-text-emphasize-primary font-roboto'}>30 day free trial in a button</p>
        <p className={'font-roboto'}>Running a <span className={'font-bold'}>Growth Business</span> or <span
          className={'font-bold'}>Enterprise</span>? Let&apos;s connect - <button
          className={'w-24 h-8 bg-primary rounded-lg text-white text-sm'}>Talk to Sales</button></p>
        <div className={'flex gap-x-4 items-center justify-center mt-5 font-roboto w-full'}>
          <p>Monthly</p>
          <button></button>
          <p>Yearly</p>
          <p
            className={'rounded-xl text-primary font-bold bg-secondary text-xs inline-flex items-center justify-center w-24 h-7 tracking-widest'}>SAVE
            25%</p>
        </div>
        <div className={'grid grid-cols-2 justify-between w-full mt-10'}>
          <PricingCard heading={starterPricingCardContent.heading} price={starterPricingCardContent.price}
                       items={starterPricingCardContent.items} />
          <PricingCard heading={premiumPricingCardContent.heading} price={premiumPricingCardContent.price}
                       items={premiumPricingCardContent.items} />
        </div>

        <Link href={'/'} className={'text-text-navigation-blue font-roboto text-lg underline'}>Explore In-Depth
          Differences</Link>
      </div>
    </main>
  );
};
