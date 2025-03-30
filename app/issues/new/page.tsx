"use client";
import ErrorText from "@/app/components/ErrorText";
import { validateIssue } from "@/app/utils/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Callout, Spinner, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoAddCircleOutline, IoInformationCircle } from "react-icons/io5";
import SimpleMDE from "react-simplemde-editor";
import { toast } from "react-toastify";
import { z } from "zod";

type IssueForm = z.infer<typeof validateIssue>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
  } = useForm<IssueForm>({
    resolver: zodResolver(validateIssue),
  });
  const router = useRouter();
  const [error, setError] = useState("");

  const onHandleSubmit = handleSubmit(async (data) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/issues");
      toast.success("Your issues was added successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error submitting form. Please try again.");
      setError("An unexpected error occured");
    }
  });

  return (
    <div>
      {error && (
        <Callout.Root color="red" className="mb-5 max-w-xl">
          <Callout.Icon>
            <IoInformationCircle />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form onSubmit={onHandleSubmit} className="md:max-w-xl space-y-3">
        <TextField.Root
          {...register("title")}
          placeholder="What's your issue..."
        >
          <TextField.Slot>
            <IoAddCircleOutline size={22} />
          </TextField.Slot>
        </TextField.Root>
        {errors.title && <ErrorText message={errors.title.message} />}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE {...field} placeholder="Describe your issue..." />
          )}
        />
        {errors.description && (
          <ErrorText message={errors.description.message} />
        )}

        <Button disabled={isSubmitting}>
          <div className="flex items-center hover:cursor-pointer">
            {isLoading ? <Spinner /> : <p>Submit Issue</p>}
          </div>
        </Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
