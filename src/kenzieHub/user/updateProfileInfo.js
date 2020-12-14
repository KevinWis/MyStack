import kenzieHub from "../../services/axios";

export const updateUserProfilePicture = async (picture) => {
  const token = localStorage.getItem("authToken");
  console.log(picture);
  const response = await kenzieHub.patch("/users/avatar", picture, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
};
