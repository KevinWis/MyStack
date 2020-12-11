import { USERLOGIN, CREATENEWTECH, UPDATETECH } from "./actionTypes";

export const userLogin = (user) => {
  return { type: USERLOGIN, user };
};

export const createNewTech = () => {
  return { type: CREATENEWTECH };
};

export const updateTech = () => {
  return { type: UPDATETECH };
};
