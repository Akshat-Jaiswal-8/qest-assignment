import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const GetStartedButton = ({ className }: { className?: string }) => {
  return (
    <button
      type={"button"}
      className={cn(
        "flex h-14 w-[205px] cursor-pointer items-center justify-between rounded-lg border bg-secondary px-5 font-bold text-primary",
        className,
      )}
    >
      Get Started
      <ArrowRight strokeWidth={2} />
    </button>
  );
};
