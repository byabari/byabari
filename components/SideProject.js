import NextLink from "next/link";
import Image from "next/image";
import { Spline_Sans_Mono } from "next/font/google";

const splineSansMono = Spline_Sans_Mono({ subsets: ["latin"], weight: "400" });

export default function Component(props) {
  return (
    <NextLink href={props.href} target="_blank">
      <div className="bg-blue-300 hover:bg-blue-400 focus:bg-gray-100 rounded-lg p-1">
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
    </NextLink>
  );
}
