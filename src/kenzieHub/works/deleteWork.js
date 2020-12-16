import kenzieHub from "../../services/axios";

export const deleteWork = async (workID) => {
  console.log(workID);
  const token = localStorage.getItem("authToken");

  try {
    const response = await kenzieHub.delete(`/users/works/${workID}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    console.log(error);
  }
};
