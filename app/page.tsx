import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";
import IssueCharts from "./IssueCharts";
import { Flex, Grid } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  return (
    <Grid gap={"5"} columns={{ initial: "1", md: "2" }}>
      <Flex gap={"5"} direction={"column"}>
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueCharts open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
}
