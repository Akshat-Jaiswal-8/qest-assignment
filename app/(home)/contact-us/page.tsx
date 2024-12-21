import React from "react";
import { Navbar } from "@/app/(home)/_components/navbar";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/app/(home)/_components/footer";

const ContactUsPage = () => {
  return (
    <section className={"h-screen w-full"}>
      <Navbar />

      <main className={"mx-auto my-20 max-w-screen-lg"}>
        <div className={"mx-auto mb-10 flex h-12 w-[456px] gap-x-1"}>
          <div
            className={
              "m-auto flex h-full items-center rounded-l-lg border px-2 font-urbanist text-base font-bold"
            }
          >
            <div className={"text-end leading-tight"}>
              AI
              <p className={"pt-0"}>
                R<span className={"text-text-emphasize-primary"}>Max</span>
              </p>
            </div>
          </div>
          <div
            className={
              "flex flex-1 items-center rounded-r-lg border pl-4 font-roboto text-base font-medium text-text-placeholder"
            }
          >
            Curious? Let AI Uncover the Answers!
          </div>
        </div>
        <h1 className={"my-20 text-6xl font-bold"}>
          Get in touch with us. <br /> We&apos;re here to assist you.
        </h1>
        <div
          className={
            "grid grid-cols-2 justify-between gap-x-10 gap-y-16 font-roboto"
          }
        >
          <div className={"flex flex-col gap-y-1"}>
            <label htmlFor={"business"}>
              Business Name <sup className={"text-primary"}>*</sup>
            </label>
            <input
              name={"business"}
              className={
                "h-[74px] rounded-lg border pl-4 placeholder:text-xl placeholder:text-text-placeholder"
              }
              placeholder={"Search for your business listing"}
            />
          </div>
          <div className={"flex flex-col gap-y-1"}>
            <label htmlFor={"name"}>
              Your Name <sup className={"text-primary"}>*</sup>
            </label>
            <input
              name={"name"}
              className={
                "h-[74px] rounded-lg border pl-4 placeholder:text-xl placeholder:text-text-placeholder"
              }
              placeholder={"Enter your name"}
            />
          </div>
          <div className={"flex flex-col gap-y-1"}>
            <label htmlFor={"phone"}>
              Phone Number <sup className={"text-primary"}>*</sup>
            </label>
            <input
              name={"phone"}
              className={
                "h-[74px] rounded-lg border pl-4 placeholder:text-xl placeholder:text-text-placeholder"
              }
              placeholder={"Enter your phone number"}
            />
          </div>
          <div className={"flex flex-col gap-y-1"}>
            <label htmlFor={"email"}>Email address</label>
            <input
              name={"email"}
              className={
                "h-[74px] rounded-lg border pl-4 placeholder:text-xl placeholder:text-text-placeholder"
              }
              placeholder={"e.g xyz@gmail.com"}
            />
          </div>
        </div>
        <div className={"mt-16 flex flex-col gap-y-1 font-roboto"}>
          <label htmlFor={"email"}>
            Message <sup className={"text-primary"}>*</sup>
          </label>
          <textarea
            name={"email"}
            className={
              "h-32 rounded-lg border p-4 placeholder:text-xl placeholder:text-text-placeholder"
            }
            placeholder={"Write your message here"}
          />
        </div>
        <button
          aria-label="Get Started with RMax"
          className={
            "mt-10 flex h-14 w-56 items-center justify-center gap-x-2 rounded-lg bg-primary font-roboto text-lg font-semibold text-white"
          }
        >
          Leave us a message <ArrowRight size={20} strokeWidth={2} />
        </button>
      </main>
      <Footer />
    </section>
  );
};

export default ContactUsPage;
