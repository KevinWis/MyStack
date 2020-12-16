import kenzieHub from "../../services/axios";

export const updateUserInfo = async (newUserInfo) => {
  const {
    name,
    contact,
    old_password,
    password,
    course_module,
    bio,
  } = newUserInfo;
  const token = localStorage.getItem("authToken");

  const reponse = await kenzieHub.put(
    "/profile",
    {
      name: name ? name : "",
      contact: contact ? contact : "",
      bio: bio ? bio : "",
      course_module: course_module ? course_module : "",
      old_password: old_password ? old_password : "",
      password: password ? password : "",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
