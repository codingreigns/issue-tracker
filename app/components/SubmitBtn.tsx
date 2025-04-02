"use client";
import { Button, Spinner } from "@radix-ui/themes";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitBtn = ({
  text,
  size,
}: {
  text: string;
  size?: "1" | "2" | "3";
}) => {
  const { pending } = useFormStatus();
  return (
    <Button size={size} type="submit">
      {pending ? (
        <>
          <Spinner /> Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitBtn;
