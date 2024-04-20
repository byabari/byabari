import NextLink from "next/link";
import Image from "next/image";

export default function Component(props) {
  return (
    <div className={"bg-white rounded-lg p-6" + props.className}>
      <div className="flex items-center gap-x-2 px-3 py-1">
        <Image
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${props.href}&sz=32`}
          alt={props.href}
          width={32}
          height={32}
        />

        <h2 className="text-gray-900">{props.title}</h2>
      </div>
      {/* <p>{description}</p> */}
    </div>
  );
}
