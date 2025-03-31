"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import UserAvatar from "./UserAvatar";
import DarkMode from "./DarkMode";
import SearchBar from "./SearchBar";

const links = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "admin/dashboard" },
  { label: "Issues", href: "/issues/list" },
];

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <nav
      className="sticky z-[100] h-24  inset-0 top-0 w-full border-b
    border-gray-200 bg-white/75 backdrop-blur-lg transition-all flex items-center justify-between  "
    >
      <div className="flex items-center  m-3">
        <div className="flex items-center border-r  border-gray-500">
          <Link href={"/"}>
            <Logo />
          </Link>
          <h1 className="font-bold text-sm tracking-wide text-gray-800 mx-2">
            Bug <span className="text-lg font-black ">Tracer</span>
          </h1>
        </div>
        <div></div>
      </div>
      <div className="">
        <ul className="md:flex items-center gap-2 hidden">
          {links.map((link) => (
            <Link
              className={classnames({
                "text-white bg-[#3e63dd] ": link.href === currentPath,
                "hover:bg-zinc-100": link.href !== currentPath,
                " transition-colors duration-100 delay-75 rounded-full px-2":
                  true,
              })}
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="m-3 flex items-center gap-4">
        <DarkMode />
        {/* search */}
        <div>
          <SearchBar />
        </div>
        {/* user */}
        <UserAvatar />
      </div>
    </nav>
  );
};

export default Navbar;
