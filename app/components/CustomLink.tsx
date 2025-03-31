import Link from "next/link";
import React from "react";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const CustomLink = ({ href, children }: Props) => {
  return (
    <Link passHref legacyBehavior href={href}>
      <RadixLink>{children}</RadixLink>
    </Link>
  );
};

export default CustomLink;
