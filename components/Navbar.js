import Link from "@/components/Link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between">
      <Link href="/">Bari Abbassi</Link>
      <div className="flex items-center space-x-4">
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
