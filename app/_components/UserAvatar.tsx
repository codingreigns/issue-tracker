import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Flex, Avatar, Button, DropdownMenu } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import SignOutLink from "./SignOutLink";

type NavLinks = {
  href: string;
  label: string;
};

const links: NavLinks[] = [{ href: "/profile", label: "profile" }];

const UserAvatar = () => {
  return (
    <Flex gap="2">
      <>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost">
              <Avatar
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                fallback="A"
              />
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
                <DropdownMenu.Item key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenu.Item>
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
