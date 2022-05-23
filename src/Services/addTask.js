import axios from "axios";

const addTask = async (todoObj) => {
  const BASE_URL = "https://mungai-taskmern-server.herokuapp.com";

  try {
    const { task, description, priority } = todoObj;

    // get token from local storage
    let token = localStorage.getItem("access_token");

    const res = await axios.post(
      `${BASE_URL}/api/taskmern/tasks/addtask`,
      {
        task,
        description,
        completed: false,
        priority,
        // user: req.id,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

export default addTask;
