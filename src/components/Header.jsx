import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-24 py-4 border-b border-white">
      <Link
        href="/"
        className="flex items-center gap-2 border rounded px-4 w-max"
      >
        <Image src="/logo-solo-rpg.png" width={60} height={60} alt="logo" />
        <h2 className="text-2xl font-normal">SOLO RPG</h2>
      </Link>
    </header>
  );
};
