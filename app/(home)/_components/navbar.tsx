import React from "react";
import { ChevronDown } from "lucide-react";
import { CompanyName } from "@/app/(home)/_components/company-name";
import Link from "next/link";

export const Navbar = () => {
  return (
    <section
      className={
        "mx-auto mt-4 flex h-nav w-full max-w-screen-lg items-center justify-between rounded-lg border px-3 font-urbanist"
      }
    >
      <h2 className={"font-secular-one text-2xl font-normal"}>
        <CompanyName />
      </h2>
      <div
        className={
          "flex items-center gap-x-5 font-roboto text-sm text-text-primary"
        }
      >
        <div className={"flex gap-x-3 font-normal"}>
          <p>Home</p>
          <p className={"flex items-center gap-x-1"}>
            Features
            <ChevronDown size={16} strokeWidth={1} color={"#000"} />
          </p>
          <Link href={"/pricing"}>Pricing</Link>
          <p className={"flex items-center gap-x-1"}>
            Solutions <ChevronDown size={16} strokeWidth={1} color={"#000"} />
          </p>
        </div>
        <p className={"h-4 border border-[#D1D5DB]"} />
        <div className={"flex gap-x-3"}>
          <button className={"h-9 w-16 rounded-md border font-medium"}>
            Login
          </button>
          <button
            className={
              "w-24 rounded-md border bg-primary font-medium text-white"
            }
          >
            Try for free
          </button>
        </div>
      </div>
    </section>
  );
};
