import kenzieHub from "../../../services/axios";

import { getUserList, getUserById, registerUser } from "./actions";
import { userLoginThunk } from "../user/thunks";

export const getUserListThunk = (options) => async (dispatch) => {
  const { page, perPage } = options;
  let userList = [];

  try {
    const response = await kenzieHub.get(
      `/users?perPage=${perPage}&page=${page}`
    );
    userList = [...response.data];
    dispatch(getUserList(userList));
  } catch (err) {
    console.log(err);
  }
};

export const getUserByIdThunk = (userId) => async (dispatch) => {
  let fetchedUser = {};

  try {
    const response = await kenzieHub.get(`/users/${userId}`);
    fetchedUser = response.data;
    dispatch(getUserById(fetchedUser));
  } catch (err) {
    console.log(err);
  }
};

export const RegisterUser = async (resisterUserInfo) => {
  const { email, password, name } = resisterUserInfo;

  try {
    const response = await kenzieHub.post(`/users`, {
      email: email,
      password: password,
      name: name,
      bio: "sem bio",
      contact: "sem contato",
      course_module: "sem curse_module",
    });

    const loginInfo = {
      email: email,
      password: password,
    };
    userLoginThunk(loginInfo);
  } catch (err) {
    console.log(err);
  }
};
