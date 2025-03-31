import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { IoPencilOutline } from "react-icons/io5";

const EditIssueBtn = ({ issueId }: { issueId: string }) => {
  return (
    <Button>
      <IoPencilOutline />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueBtn;
