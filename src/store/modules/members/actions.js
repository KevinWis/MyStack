import { GETUSERLIST, GETUSERSBYID, REGISTERUSER } from "./actionTypes";

export const getUserList = (list) => {
    return { type: GETUSERLIST, list };
};

export const getUserById = (user) => {
    return { type: GETUSERSBYID, user };
};

export const registerUser = () => {
    return { type: REGISTERUSER };
};