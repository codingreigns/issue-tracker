import prisma from "@/prisma/client";
import IssuesTable from "./IssuesTable";
import IssuesActions from "./IssuesActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  return (
    <div>
      <IssuesActions />
      <div>
        <IssuesTable issues={issues} />
      </div>
    </div>
  );
};

export default IssuesPage;
