import React from "react";

interface ISectionHeadingProps {
  heading: string;
  description?: string;
}

export const SectionHeader = ({
  heading,
  description,
}: ISectionHeadingProps) => {
  return (
    <>
      <h1 className={"font-urbanist text-5xl font-bold leading-tight"}>
        {heading}
      </h1>
      {description && (
        <p
          className={
            "font-roboto text-text-primary-foreground text-base font-normal leading-relaxed"
          }
        >
          {description}
        </p>
      )}
    </>
  );
};
