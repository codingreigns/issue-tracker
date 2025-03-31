import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueBtn from "./EditIssueBtn";
import IssueDetailsCard from "./IssueDetailsCard";
import DeleteIssueBtn from "./DeleteIssueBtn";

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
    <Grid gap={"5"} columns={{ initial: "1", sm: "5" }}>
      <Box className="md:col-span-4">
        <IssueDetailsCard issue={issue} />
      </Box>
      <Box>
        <Flex direction={"column"} gap={"4"}>
          <EditIssueBtn issueId={issueId} />
          <DeleteIssueBtn issueId={issueId} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailsPage;
