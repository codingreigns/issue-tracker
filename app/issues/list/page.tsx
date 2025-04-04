import prisma from "@/prisma/client";
import IssuesTable from "./IssuesTable";
import IssuesActions from "./IssuesActions";
import { Issue, Status } from "@prisma/client";
import Pagination from "@/app/components/Pagination";

interface Params {
  searchParams: Promise<{
    status: Status;
    orderBy: string;
    page: string;
  }>;
}

const colomns: { value: keyof Issue }[] = [
  { value: "title" },
  { value: "status" },
  { value: "createdAt" },
];

const IssuesPage = async ({ searchParams }: Params) => {
  const { status, orderBy, page } = await searchParams;

  const statuses = Object.values(Status);

  const validStatus = statuses.includes(status) ? status : undefined;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const validOrderBy = colomns.map((col) => col.value).includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const currentPage = page ? parseInt(page) : 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: { status: validStatus },
    orderBy: validOrderBy,
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  });
  const totalIssues = await prisma.issue.count({
    where: { status: validStatus },
  });
  return (
    <div>
      <IssuesActions />
      <div className="mb-5">
        <IssuesTable orderBy={orderBy} issues={issues} status={validStatus} />
      </div>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        itemCount={totalIssues}
      />
    </div>
  );
};

export default IssuesPage;
