import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Flex, Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import SignOutLink from "./SignOutLink";
import { fetchProfileImage } from "../utils/Actions";
import { IoPerson } from "react-icons/io5";

type NavLinks = {
  href: string;
  label: string;
};

const links: NavLinks[] = [{ href: "/profile", label: "profile" }];

const UserAvatar = async () => {
  const profile = await fetchProfileImage();
  return (
    <Flex gap="2">
      <>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">
              <Avatar src={profile?.profileImage} fallback={<IoPerson />} />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="w-44" align="start" sideOffset={10}>
            <SignedOut>
              <DropdownMenu.Item>
                <SignInButton mode="modal">
                  <button className="w-full text-left">Login</button>
                </SignInButton>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <SignUpButton mode="modal">
                  <button className="w-full text-left">Register</button>
                </SignUpButton>
              </DropdownMenu.Item>
            </SignedOut>
            <SignedIn>
              {links.map((link) => (
                <Link href={link.href} key={link.label}>
                  <DropdownMenu.Item key={link.href}>
                    {link.label}
                  </DropdownMenu.Item>
                </Link>
              ))}
              <DropdownMenu.Separator />
              <SignOutLink />
            </SignedIn>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </>

      {/* <Avatar fallback="A" /> */}
    </Flex>
  );
};

export default UserAvatar;
