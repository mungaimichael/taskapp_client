import { useState } from "react";
import loginUser from "../Services/loginUser";
const useLogin = () => {
  const [user, setUser] = useState({});
  const login = async (username, password) => {
    const response = await loginUser(username, password);
    setUser(response);
  };
  return { login, user };
};

export default useLogin;
