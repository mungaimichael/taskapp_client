import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useContext } from "react";
import { BtnText, DescWrapper } from "./AddDesc.Elements";

// import task context
import { taskContext } from "../../../Contexts/textContext";
import addTask from "../../../Services/addTask";
import axios from "axios";

const AddDescription = () => {
  const {
    task,
    settask,
    description,
    setdescription,
    completed,
    priority,
    setpriority,
    settasksArray,
  } = useContext(taskContext);

  // task object to send to the back end

  const taskObj = {
    task,
    description,
    completed,
    priority,
  };

  const fetchTasks = async () => {
    try {
      // get token from local storage
      let token = localStorage.getItem("access_token");

      const res = await axios.get(
        "http://localhost:8086/api/taskmern/tasks/all",
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      const tasks = await res.data;
      return tasks;
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <DescWrapper>
      <TextField
        label="add a description"
        multiline
        rows={5}
        placeholder="description"
        variant="standard"
        sx={{ marginLeft: "3rem", width: "80%" }}
        value={description}
        onChange={(event) => {
          setdescription(event.target.value);
        }}
      />
      <FormControlLabel
        sx={{ marginLeft: "3rem", fontWeight: "bold" }}
        control={
          <Checkbox
            defaultChecked
            value={priority}
            onClick={() => {
              setpriority(!priority);
              console.log(priority);
            }}
          />
        }
        label="priority task"
      />
      <Button
        sx={{ margin: "2rem", width: "83%", height: "80px" }}
        variant={task === "" || description === "" ? "disabled" : "contained"}
        onClick={async () => {
          const tasks = await fetchTasks();
          settasksArray(tasks);
          addTask(taskObj);
          setdescription("");
          settask("");
        }}
      >
        <BtnText sx={{ fontSize: "1.7rem", fontWeight: "bold" }}>
          add task
        </BtnText>
      </Button>
    </DescWrapper>
  );
};

export default AddDescription;
