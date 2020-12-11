import kenzieHub from "../../../services/axios";

export const userLoginThunk = (userLoginInfo, _error) => async (dispatch) => {
  const { email, password } = userLoginInfo;
  try {
    const response = await kenzieHub.post(`/sessions`, {
      email: email,
      password: password,
    });

    const { token } = response.data;

    localStorage.setItem("authToken", token);
  } catch (err) {
    console.log(err);
  }
};

export const createTech = async (tech) => {
  const { title, status } = tech;
  let api = "";

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
  } catch (err) {
    console.log(err);
  }
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
  } catch (err) {
    console.log(err);
  }
};
