import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue, Status } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import CustomLink from "../../components/CustomLink";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const IssuesTable = ({
  issues,
  status,
  orderBy,
  
}: {
  issues: Issue[];
  status?: Status | undefined;
  orderBy?: string;
}) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>
            <Link
              href={
                status
                  ? `/issues/list?status=${status}&orderBy=title`
                  : "/issues/list?orderBy=title"
              }
              className="flex gap-3"
            >
              Issue Title
              {orderBy === "title" ? <FaArrowUp /> : ""}
            </Link>
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            <Link
              href={
                status
                  ? `/issues/list?status=${status}&orderBy=status`
                  : "/issues/list?orderBy=status"
              }
              className="flex gap-3"
            >
              Status
              {orderBy === "status" ? <FaArrowUp /> : ""}
            </Link>
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            <Link
              href={
                status
                  ? `/issues/list?status=${status}&orderBy=createdAt`
                  : "/issues/list?orderBy=createdAt"
              }
              className="flex gap-3"
            >
              Created
              {orderBy === "createdAt" ? <FaArrowUp /> : ""}
            </Link>
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues.map((issue) => (
          <Table.Row key={issue.id}>
            <Table.RowHeaderCell>
              <CustomLink href={`/issues/${issue.id}`}>
                {issue.title}
              </CustomLink>
            </Table.RowHeaderCell>
            <Table.Cell className="hidden md:table-cell ">
              <IssueStatusBadge status={issue.status} />
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              {issue.createdAt.toLocaleString()}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default IssuesTable;
