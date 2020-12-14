import kenzieHub from "../../services/axios";

export const updateUserProfilePicture = async (picture) => {
  const token = localStorage.getItem("authToken");

  const reponse = await kenzieHub.patch("/users/avatar", picture, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
