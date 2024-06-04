import NextLink from "next/link";
import Image from "next/image";

export default function Component(props) {
  return (
    <div className={"rounded-2xl " + props.className}>
      <div className="flex items-center gap-x-4 pl-1 py-4">
        <Image
          className="rounded -mr-1.5"
          src={props.logoImageSrc}
          alt={props.title + " logo"}
          width={32}
          height={32}
        />

        <h2 className="font-medium">{props.title}</h2>
      </div>
      {props.children && <div className="pt-0 pb-5">{props.children}</div>}
      {props.imageSrc && (
        <Image src={props.imageSrc} alt={props.title} width={450} height={32} />
      )}
    </div>
  );
}
