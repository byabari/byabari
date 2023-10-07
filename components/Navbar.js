import Link from "@/components/Link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between pb-1.5">
        <Link href="/">abbas.si</Link>
        <div className="flex items-center space-x-4">
          <Link href="/about">About</Link>
        </div>
      </div>
    </nav>
  );
}
