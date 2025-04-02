import { Icons } from "@/app/_components/Icon";
import { Heading } from "@radix-ui/themes";
import UserInputForm from "../_components/UserInputForm";
import FormContainer from "../_components/FormContainer";
import { CreateUserAction } from "@/app/utils/Actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CreateProfilePage = async () => {
  const user = await currentUser();
  if (user?.privateMetadata?.hasProfile) redirect("/");
  return (
    <div className="flex flex-col items-center min-h-screen">
      <section>
        <Heading as="h1">
          <p className="text-3xl md:text-6xl text-center">
            Welcome{" "}
            <span className="relative px-2">
              Aboard
              <Icons.underline
                className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6"
                color="blue"
              />
            </span>
            !
          </p>
        </Heading>
      </section>
      <section className="border border-gray-400 p-10 mt-10 md:mt-20 rounded max-w-full ">
        <FormContainer action={CreateUserAction}>
          <UserInputForm />
        </FormContainer>
      </section>
    </div>
  );
};

export default CreateProfilePage;
