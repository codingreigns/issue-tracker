"use server";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "@/prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UserSchema, validateWithZodSchema } from "./schemas";

export async function CreateUserAction(prevState: unknown, formData: FormData) {
  try {
    const user = await currentUser();
    if (!user) throw new Error("Please login in to create a profile");
    const rawData = Object.fromEntries(formData);
    const validateFields = validateWithZodSchema(UserSchema, rawData);

    await prisma.user.create({
      data: {
        clerkId: user?.id,
        email: user.emailAddresses[0].emailAddress,
        profileImage: user.imageUrl ?? "",
        coverImage: user.imageUrl ?? "",
        userDescription: validateFields.userDescription,
        firstName: validateFields.firstName,
        lastName: validateFields.lastName,
        username: validateFields.username,
      },
    });
    const client = await clerkClient();
    await client.users.updateUserMetadata(user.id, {
      privateMetadata: { hasProfile: true },
    });
  } catch (error) {
    console.log(error);
    return { message: "Something went wrong " };
  }
  redirect("/");
}

export const fetchProfileImage = async () => {
  const user = await currentUser();
  if (!user) return null;

  const profile = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
    select: {
      profileImage: true,
      coverImage: true,
    },
  });
  return profile;
};

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) throw new Error("Please login in to create a profile");
  if (!user.privateMetadata.hasProfile) redirect("/profile/create");
  return user;
};

export const fetchUserProfile = async () => {
  const user = await getAuthUser();
  const userProfile = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });
  if (!userProfile) redirect("/profile/create");
  return userProfile;
};

const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : "Something went wrong",
  };
};

export const updateProfileAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validateFields = validateWithZodSchema(UserSchema, rawData);
    await prisma.user.update({
      where: { clerkId: user.id },
      data: validateFields,
    });
    revalidatePath("/profile");
    return { message: "Your profile is updated" };
  } catch (error) {
    console.log(error);
    return renderError(error);
  }
};
