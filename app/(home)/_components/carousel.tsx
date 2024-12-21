import React from "react";
import Image from 'next/image';
import Link from 'next/link';

interface ICarouselProps {
  image : string;
  heading : string;
  description : string;
}

export const Carousel = ({
  image,
  heading,
  description
} : ICarouselProps) => {
  return (
      <div className="flex flex-col gap-y-4 ">
       <Image src={"/" + image} alt={image} width={300} height={350} className={"rounded-xl"} quality={100}/>
        <h2 className={"font-roboto font-semibold text-3xl"}>{heading}</h2>
        <p className={"font-roboto text-sm text-text-primary-foreground"}>{description} <Link
          href={"/"}
          className={
            "text-text-navigation-blue"
          }
        >
          Know more...
        </Link></p>
      </div>
  );
};
