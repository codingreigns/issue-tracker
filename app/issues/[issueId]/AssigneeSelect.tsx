"use client";
import useUsers from "@/app/hooks/useUsers";
import { Issue } from "@prisma/client";
import { DropdownMenu, Select } from "@radix-ui/themes";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, isLoading } = useUsers();

  if (isLoading) return <Skeleton height={"2rem"} />;

  const handleValueChange = async (userId: string) => {
    try {
      await axios.patch(`/api/issues/${issue.id}`, {
        assignedToUserId: userId === "null" ? null : userId,
      });
      toast.success("User assigned successfully!");
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    }
  };

  return (
    <Select.Root
      onValueChange={handleValueChange}
      defaultValue={issue.assignedToUserId || "null"}
    >
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Item value="null">
            {issue.assignedToUserId ? "Unassign" : "Assign"}
          </Select.Item>
          <DropdownMenu.Separator />
          <Select.Label>Suggestions</Select.Label>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.firstName}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
