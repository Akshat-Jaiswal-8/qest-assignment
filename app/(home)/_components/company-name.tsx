import React from "react";
import { cn } from "@/lib/utils";

export const CompanyName = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex", className)}>
      <span>R</span>
      <span className={"text-text-emphasize-primary"}>Max</span>
    </div>
  );
};
