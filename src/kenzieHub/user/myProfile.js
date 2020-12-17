import kenzieHub from "../../services/axios";
import axios from "axios";
import { getUserById } from "../../store/modules/members/actions";

export const getMyProfile = () => async (dispatch) => {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.get("https://kenziehub.me/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getUserById(response.data));
  } catch (err) {
    //console.log(err)
  }
};
