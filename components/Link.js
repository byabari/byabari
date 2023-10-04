import NextLink from "next/link";

export default function Link(props) {
  return (
    <NextLink {...props}>
      <div className="hover:underline">{props.children}</div>
    </NextLink>
  );
}
