import NextLink from "next/link";
import Image from "next/image";
import { Spline_Sans_Mono } from "next/font/google";

const splineSansMono = Spline_Sans_Mono({ subsets: ["latin"], weight: "400" });

export default function Component(props) {
  return (
    <div className={"rounded-2xl " + props.className}>
      {props.description && (
        <div className="pt-0 pb-5">
          <p className={splineSansMono.className + " text-[#3A3A3A]"}>
            {props.description}
          </p>
        </div>
      )}
      <div className="flex items-center gap-x-3.5 pl-.5 py-3">
        <Image
          className="rounded -mr-1.5"
          src={props.logoImageSrc}
          alt={props.title + " logo"}
          width={21}
          height={32}
        />

        <h2 className="text-sm font-medium">{props.title}</h2>
      </div>
      {props.imageSrc && (
        <Image
          className="rounded-lg"
          src={props.imageSrc}
          alt={props.title}
          width={180}
          height={32}
        />
      )}
    </div>
  );
}
