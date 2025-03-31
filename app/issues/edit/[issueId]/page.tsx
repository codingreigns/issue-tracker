import prisma from "@/prisma/client";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import React from "react";
import IssueFormSkeleton from "./loading";
// import IssueForm from "../../_components/IssueForm";
const IssueForm = dynamic(() => import("../../_components/IssueForm"), {
  loading: () => <IssueFormSkeleton />,
});

interface Params {
  params: Promise<{ issueId: string }>;
}

const EditIssuePage = async ({ params }: Params) => {
  const { issueId } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });
  if (!issue) notFound();
  return (
    <div>
      <IssueForm issue={issue} />
    </div>
  );
};

export default EditIssuePage;
