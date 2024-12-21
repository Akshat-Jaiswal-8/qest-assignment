import React from 'react';
import { footerItems } from '@/app/(home)/constant';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';


export const Footer = (): React.ReactNode => {
  return (
    <section className={'w-full h-full bg-text-primary'}>
      <main className={'p-20 mx-auto grid w-full grid-cols-6 '}>
        {footerItems.map((eachFooterItem: IFooter, index: number): React.ReactNode => (
          <div key={index} className={'font-roboto'}>
            <h3 className={'text-[#FAFAFA80] text-base font-normal'}>
              {eachFooterItem.heading}
            </h3>
            <ul className={'text-white mt-5'}>
              {eachFooterItem.items.map((eachItem: string, index: number) => (
                <li key={index} className={'mb-2'}>{eachItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      <div className={'py-10 border-t border-t-text-primary-foreground max-w-screen-lg mx-auto'}>
        <div className={'flex justify-between'}>
          <p className={'text-[#FAFAFA80] font-roboto text-sm font-medium'}>© 2024 Copyright, All Right
            Reserved@RMax</p>
          <div className={'flex gap-x-3 text-white'}>
            <Twitter strokeWidth={1} />
            <Facebook strokeWidth={1} />
            <Instagram strokeWidth={1} />
            <Linkedin strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
};
