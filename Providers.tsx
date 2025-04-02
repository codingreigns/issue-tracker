"use client";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";
import QueryProvider from "./QueryClientProvider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider
        attribute={"class"}
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
