"use client";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";
import { toast } from "react-toastify";
import { ImSwitch } from "react-icons/im";

const SignOutLink = () => {
  const handleLogout = () => {
    try {
      toast.success("You have been successfully logged out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SignOutButton redirectUrl="/">
      <button
        className="w-full text-left flex items-center gap-4 hover:cursor-pointer hover:text-red-400 transition-colors p-[2px] delay-75 rounded pl-3"
        onClick={handleLogout}
      >
        <ImSwitch />
        <p className="text-sm">Logout</p>
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
