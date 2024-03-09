import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-4 py-4 border-b border-white">
      <Link
        href="/"
        className="flex items-center gap-2 border rounded px-4 py-1 w-max"
      >
        <Image src="/logo-solorpg.png" width={40} height={40} alt="logo" />
        <h2 className="text-2xl font-normal">SOLO RPG</h2>
      </Link>
    </header>
  );
};
