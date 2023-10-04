import NextLink from "next/link";

export default function Link(props) {
  return (
    <NextLink {...props}>
      <div className="hover:underline underline-offset-4">{props.children}</div>
    </NextLink>
  );
}
