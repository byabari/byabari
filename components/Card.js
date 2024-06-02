import NextLink from "next/link";
import Image from "next/image";

export default function Component(props) {
  return (
    <div className={"bg-white rounded-lg border " + props.className}>
      <div className="flex items-center gap-x-3 px-3 py-3">
        <Image
          className="rounded"
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${props.href}&sz=32`}
          alt={props.href}
          width={32}
          height={32}
        />

        <h2 className="text-gray-800 font-medium">{props.title}</h2>
      </div>
      {props.children && (
        <div className="p-3 pt-0 h-[80px]">{props.children}</div>
      )}
      {props.imageSrc && (
        <Image src={props.imageSrc} alt={props.title} width={429} height={32} />
      )}
    </div>
  );
}
