import kenzieHub from "../../services/axios";

export const createWork = async (workInfo) => {
  const { title, description, deploy_url } = workInfo;
  const token = localStorage.getItem("authToken");

  try {
    const response = await kenzieHub.post(
      "/users/works",
      {
        title: title,
        description: description,
        deploy_url: deploy_url,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    //console.log(response.data)
  } catch (error) {
    //console.log(error)
  }
};
