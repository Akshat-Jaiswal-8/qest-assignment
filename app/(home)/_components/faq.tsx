'use client';
import React, { useState } from 'react';
import { SectionHeader } from '@/app/(home)/_components/section-header';
import { faqs } from '@/app/(home)/constant';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Faq = () => {

  const [openId, setOpenId] = useState<number | null>(null);
  const handleAccordionAction = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <main className={'mx-auto h-screen w-full max-w-screen-lg'}>
      <div
        className={
          'mx-auto flex w-full max-w-screen-md flex-col mb-12 items-center gap-y-4 text-center'
        }
      >
        <div className={'flex flex-col gap-y-4'}>
          <SectionHeader
            heading={'Frequently Asked Questions'}
            description={
              'Find answers to common questions about our services and features. '
            }
          />
          <p
            className={
              'font-roboto text-text-primary-foreground text-base font-normal leading-relaxed'
            }
          >For more details, contact our support team.</p>
        </div>
      </div>
      <input placeholder={'Ask Q! e.g Tell me about key Features.'}
             className={'h-12 w-full placeholder:text-text-placeholder font-roboto border rounded-xl pl-4'} />
      <div className="flex flex-col gap-y-5 mt-10 font-roboto">
        {faqs.map((faq: IFaqs): React.ReactNode => (
          <div
            className="cursor-pointer border border-border-primary-light rounded-xl p-6"
            onClick={() => handleAccordionAction(faq.id)}
            key={faq.id}>
            <div className="flex items-center justify-between transition-all duration-300">
              <h1 className="px-1 font-semibold text-xl">{faq.question}</h1>
              <span>
                <ChevronDown
                  className={cn('transition-all duration-300', openId === faq.id && 'rotate-180')}
                />
              </span>
            </div>
            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                openId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0',
              )}>
              <p className="mt-6 px-1 text-text-primary-foreground text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={'font-roboto mt-8 text-center'}>Haven’t got your answer? <Link
        className={'text-text-navigation-blue'}
        href={'/'}>Contact our support
        now</Link></p>
    </main>
  );
};
