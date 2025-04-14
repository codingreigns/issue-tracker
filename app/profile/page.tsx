import { TextArea, TextField } from "@radix-ui/themes";
import SubmitBtn from "../components/SubmitBtn";
import { fetchUserProfile, updateProfileAction } from "../utils/Actions";
import FormContainer from "./_components/FormContainer";

const ProfilePage = async () => {
  const profile = await fetchUserProfile();

  return (
    <div className="p-10 border border-gray-300 shadow-2xl rounded">
      <div className="flex items-center justify-center">
        <div>photo</div>
      </div>
      <FormContainer action={updateProfileAction}>
        <div className="flex flex-col gap-5 md:grid grid-cols-5 gap-x-5">
          <div className="col-span-2 space-y-2">
            <TextField.Root
              size="2"
              placeholder="Firstname"
              name="firstName"
              defaultValue={profile?.firstName}
            />
            <TextField.Root
              size="2"
              placeholder="Lastname"
              name="lastName"
              defaultValue={profile?.lastName}
            />
            <TextField.Root
              size="2"
              placeholder="Username"
              name="username"
              defaultValue={profile?.username}
            />
          </div>
          <div className="col-span-3">
            <TextArea
              name="userDescription"
              className="max-w-3xl"
              placeholder="Tell us something about yourself…"
              defaultValue={profile?.userDescription}
            />
            <div className="mt-2 w-full">
              <SubmitBtn size="3" text="Update Profile" />
            </div>
          </div>
        </div>
      </FormContainer>
    </div>
  );
};

export default ProfilePage;
