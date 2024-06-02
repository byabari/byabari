import NextLink from "next/link";
import Image from "next/image";

export default function Component(props) {
  return (
    <div className={"rounded-2xl " + props.className}>
      <div className="flex items-center gap-x-4 px-1.5 py-4">
        <Image
          className="rounded"
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${props.href}&sz=32`}
          alt={props.href}
          width={32}
          height={32}
        />

        <h2 className="text-gray-800 font-medium">{props.title}</h2>
      </div>
      {props.children && <div className="pt-0 pb-5">{props.children}</div>}
      {props.imageSrc && (
        <Image src={props.imageSrc} alt={props.title} width={429} height={32} />
      )}
    </div>
  );
}
