"use client";
import classnames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { label: "Home", href: "/" },
  // { label: "Dashboard", href: "admin/dashboard" },
  { label: "Issues", href: "/issues/list" },
];

const LinksDisplay = () => {
  const currentPath = usePathname();

  return (
    <ul className="md:flex items-center gap-2 hidden">
      {links.map((link) => (
        <Link
          className={classnames({
            "text-white bg-[#3e63dd] ": link.href === currentPath,
            "hover:bg-zinc-100": link.href !== currentPath,
            " transition-colors duration-100 delay-75 rounded-full px-2": true,
          })}
          href={link.href}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default LinksDisplay;
