import { Status } from "@prisma/client";
import { Card, Flex } from "@radix-ui/themes";
import CustomLink from "./components/CustomLink";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const statuses: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In-progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <div className="flex flex-col md:flex-row  gap-5">
      {statuses.map((status) => (
        <Card key={status.label}>
          <Flex direction={"column"}>
            <CustomLink href={`/issues/list?status=${status.status}`}>
              {status.label}
            </CustomLink>
            <p className="font-bold text-black">{status.value}</p>
          </Flex>
        </Card>
      ))}
    </div>
  );
};

export default IssueSummary;
