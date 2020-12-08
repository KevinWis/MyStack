import { GETUSERLIST, GETUSERSBYID, REGISTERUSER } from "./actionTypes";
const membersReducer = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case GETUSERLIST:
      return [...action.list];

    case GETUSERSBYID:
      return action.user;

    default:
      return state;
  }
};

export default membersReducer;
