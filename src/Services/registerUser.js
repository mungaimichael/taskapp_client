import axios from "axios";

export const registerUser = async (username, password) => {
  const BASE_URL = "https://mungai-taskmern-server.herokuapp.com";

  try {
    const res = await axios.post(`${BASE_URL}/api/taskmern/register`, {
      username,
      password,
    });
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
