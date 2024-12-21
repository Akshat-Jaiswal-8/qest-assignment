"use client";
import React, { useState } from "react";
import { SectionHeader } from "@/app/(home)/_components/section-header";
import { faqs } from "@/app/(home)/constant";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Faq = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const handleAccordionAction = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <main className={"mx-auto my-20 h-full w-full max-w-screen-lg"}>
      <div
        className={
          "mx-auto mb-12 flex w-full max-w-screen-md flex-col items-center gap-y-4 text-center"
        }
      >
        <div className={"flex flex-col gap-y-4"}>
          <SectionHeader
            heading={"Frequently Asked Questions"}
            description={
              "Find answers to common questions about our services and features. "
            }
          />
          <p
            className={
              "font-roboto text-base font-normal leading-relaxed text-text-primary-foreground"
            }
          >
            For more details, contact our support team.
          </p>
        </div>
      </div>
      <input
        placeholder={"Ask Q! e.g Tell me about key Features."}
        className={
          "h-12 w-full rounded-xl border pl-4 font-roboto placeholder:text-text-placeholder"
        }
      />
      <div className="mt-10 flex flex-col gap-y-5 font-roboto">
        {faqs.map(
          (faq: IFaqs): React.ReactNode => (
            <div
              className="cursor-pointer rounded-xl border border-border-primary-light p-6"
              onClick={() => handleAccordionAction(faq.id)}
              key={faq.id}
            >
              <div className="flex items-center justify-between transition-all duration-300">
                <h1 className="px-1 text-xl font-semibold">{faq.question}</h1>
                <span>
                  <ChevronDown
                    className={cn(
                      "transition-all duration-300",
                      openId === faq.id && "rotate-180",
                    )}
                  />
                </span>
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openId === faq.id
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0",
                )}
              >
                <p className="mt-6 px-1 text-base text-text-primary-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ),
        )}
      </div>
      <p className={"mt-8 text-center font-roboto"}>
        Haven’t got your answer?{" "}
        <Link className={"text-text-navigation-blue"} href={"/contact-us"}>
          Contact our support now
        </Link>
      </p>
    </main>
  );
};
