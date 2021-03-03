import kenzieHub from "../../../services/axios";

export const userLoginThunk = (userLoginInfo, error) => async (dispatch) => {
  const { email, password } = userLoginInfo;
  try {
    const response = await kenzieHub.post(`/sessions`, {
      email: email,
      password: password,
    });
    const { token } = response.data;
    const { id } = response.data.user;
    localStorage.setItem("authToken", token);
    localStorage.setItem("userId", id);
  } catch (err) {
    error("password", { message: "Senha ou usuário inválido" });
  }
};

export const createTech = async (tech) => {
  const { title, status } = tech;

  try {
    const response = await kenzieHub.post(
      `/users/techs`,
      {
        title: title,
        status: status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
  } catch (err) {}
};

export const updateTech = async (newTech) => {
  const { techId, newStatus } = newTech;
  try {
    const response = await kenzieHub.put(
      `/users/techs/${techId}`,
      {
        status: newStatus,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
  } catch (err) {}
};
