import kenzieHub from "../../services/axios";

export const updateUserProfilePicture = async (avatar) => {
  const token = localStorage.getItem("authToken");

  const reponse = await kenzieHub.patch("/users/avatar", avatar, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
