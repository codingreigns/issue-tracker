import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssuesActions = () => {
  return (
    <div className="mb-5 flex justify-between">
      <IssueStatusFilter />
      <Button>
        <Link href={"/issues/new"}>New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesActions;
