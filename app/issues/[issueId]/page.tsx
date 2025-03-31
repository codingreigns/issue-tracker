import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueBtn from "./EditIssueBtn";
import IssueDetailsCard from "./IssueDetailsCard";

interface Params {
  params: Promise<{ issueId: string }>;
}

const IssueDetailsPage = async ({ params }: Params) => {
  const { issueId } = await params;
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });
  if (!issue) notFound();
  return (
    <Grid gap={"5"} columns={{ initial: "1", md: "2" }}>
      <Box>
        <IssueDetailsCard issue={issue} />
      </Box>
      <Box>
        <EditIssueBtn issueId={issueId} />
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
