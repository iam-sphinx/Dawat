import { useGetUser, useUpdateUser } from "@/api/user.api";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetLoading } = useGetUser();

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return isGetLoading ? (
    <span>Loading...</span>
  ) : (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfilePage;
