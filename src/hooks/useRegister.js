import axios from "axios";
import { registerUser } from "../Services/registerUser";

const useRegister = () => {
  const [user, setUser] = useState({});
  const register = async (username, password) => {
    const response = registerUser(username, password);
    const user = await response.data;
    setUser(user);
  };

  return { user, register };
};

export default useRegister;
