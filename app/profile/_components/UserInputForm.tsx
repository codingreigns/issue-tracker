"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  defaultValue?: {
    firstName: string;
    lastName: string;
    userName: string;
    userDescription: string;
  };
}

const UserInputForm = ({ defaultValue }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-5 md:grid grid-cols-6 gap-x-5">
        <div className="col-span-2 space-y-2">
          <TextField.Root
            required
            size="2"
            placeholder="Firstname"
            name="firstName"
            defaultValue={defaultValue?.firstName}
          />
          <TextField.Root
            required
            size="2"
            placeholder="Lastname"
            name="lastName"
            defaultValue={defaultValue?.lastName}
          />
          <TextField.Root
            required
            size="2"
            placeholder="Username"
            name="username"
            defaultValue={defaultValue?.userName}
          />
        </div>
        <div className="col-span-3">
          <TextArea
            required
            name="userDescription"
            className="max-w-3xl"
            placeholder="Tell us something about yourself…"
            defaultValue={defaultValue?.userDescription}
          />

          <div className="flex flex-col mt-2">
            <p className="text-gray-400 tracking-tighter flex items-center gap-1.5 ">
              By creating profile you have agreed to our user terms & services
              <span>
                <Link href={"/terms"}>
                  <FaExternalLinkAlt />
                </Link>
              </span>
            </p>
          </div>
          <div className="mt-2 w-full">
            <Button size={"4"} className="w-full" type="submit">
              {/* <Link href={"/"}>Create Profile</Link> */}
              {/* <Spinner /> */}
              Create Profile
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInputForm;
