import { USERLOGIN, CREATENEWTECH, UPDATETECH } from "./actionTypes";
const getUserList = (list) => {
  return { type: USERLOGIN, list };
};
const getUserById = () => {
  return { type: CREATENEWTECH };
};
const registerUser = () => {
  return { type: UPDATETECH };
};
