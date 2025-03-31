"use client";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const DeleteIssueBtn = ({ issueId }: { issueId: string }) => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await axios.delete(`/issues/${issueId}`);
      router.push("/issues/list");
      toast.success("Your issues was deleted successfully!");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Error deleting issue. Please try again.");
    }
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="red">
            <IoTrashBinOutline />
            Delete
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Delete This Issue</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Are you sure? This action cannot be reversed
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={onDelete}>
                Delete
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueBtn;
