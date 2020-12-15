import kenzieHub from "../../services/axios";

export const updateWork = async (newWorkInfo) => {
  const { title, description, workID } = newWorkInfo;
  console.log(newWorkInfo);
  const token = localStorage.getItem("authToken");

  try {
    const response = await kenzieHub.put(
      `/users/works/${workID}`,
      {
        title: title ? title : "",
        description: description ? description : "",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
