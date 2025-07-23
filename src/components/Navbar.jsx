"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // Optional utility for conditional classNames

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-4 bg-white p-4">
      <Link
        href="/"
        className={clsx(
          "text-red-500 hover:text-black",
          pathname === "/" && "text-blue-600 font-bold"
        )}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={clsx(
          "text-red-500 hover:text-black",
          pathname === "/about" && "text-blue-600 font-bold"
        )}
      >
        About
      </Link>
      <Link
        href="/users"
        className={clsx(
          "text-red-500 hover:text-black",
          pathname === "/users" && "text-blue-600 font-bold"
        )}
      >Users</Link>
    </nav>
  );
}
