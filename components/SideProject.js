import NextLink from "next/link";
import Image from "next/image";
import { Spline_Sans_Mono } from "next/font/google";

const splineSansMono = Spline_Sans_Mono({ subsets: ["latin"], weight: "400" });

export default function Component(props) {
  return (
    <NextLink href={props.href} target="_blank">
      <div className="border bg-gray-200 hover:bg-gray-300 focus:bg-gray-400 rounded-lg p-1">
        <div className={"rounded-2xl " + props.className}>
          <div className="flex items-center gap-x-3.5 pl-1 mt-1.5 mb-2.5">
            <Image
              className="rounded -mr-1.5"
              src={props.logoImageSrc}
              alt={props.title + " logo"}
              width={21}
              height={32}
            />
            <h2 className="text-sm font-medium">{props.title}</h2>
          </div>
          {/* {props.description && (
        <div className="pt-0 pb-5">
          <p
            className={
              splineSansMono.className + " text-xs font-light text-[#3A3A3A]"
            }
          >
            {props.description}
          </p>
        </div>
      )} */}
          {props.imageSrc && (
            <Image
              className="rounded-lg"
              src={props.imageSrc}
              alt={props.title}
              width={210}
              height={32}
            />
          )}
        </div>
      </div>
    </NextLink>
  );
}
