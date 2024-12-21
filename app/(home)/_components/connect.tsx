import React from 'react';
import { SectionHeader } from '@/app/(home)/_components/section-header';
import Image from 'next/image';

export const Connect = () => {
  return (
    <main className={'mx-auto h-full mb-32 w-full max-w-screen-lg'}>
      <div
        className={
          'mx-auto flex w-full max-w-screen-md flex-col items-center gap-y-4 text-center'
        }
      >
        <SectionHeader
          heading={'Manage Your Business On the Go'}
          description={
            'With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you.'
          }
        />
      </div>
      <div className={'flex gap-x-5 justify-center mt-10'}>
        <button
          className={'h-20 w-52 border border-black flex items-center justify-center gap-x-2 rounded-xl text-xl font-roboto font-medium'}>
          <Image src={'/apple-logo.png'} alt={'apple logo'} width={33} height={40} quality={100} />
          App Store
        </button>
        <button
          className={'h-20 w-52 border border-black flex items-center justify-center gap-x-2 rounded-xl text-xl font-urbanist font-semibold'}>
          <Image src={'/google-play.png'} alt={'apple logo'} width={33} height={40} quality={100} />
          Google Play
        </button>
      </div>
    </main>
  );
};
