import kenzieHub from "../../services/axios";

export const createTech = async (tech) => {
  const { title, status } = tech;
  const token = localStorage.getItem("authToken");
  try {
    const response = await kenzieHub.post(
      "/users/techs",
      {
        title: title,
        status: status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
