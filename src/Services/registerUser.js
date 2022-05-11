import axios from "axios";

export const registerUser = async (username, password) => {
  try {
    const res = await axios.post(
      "http://localhost:8086/api/taskmern/register",
      {
        username,
        password,
      }
    );
    const user = await res.data;

    // if user exists, automatically log in
    if (user) {
      window.location.href = "/taskmern/home";
      return user;
    }
  } catch (err) {
    console.log(err);
  }
};
