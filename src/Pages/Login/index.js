import { Person, LoginSharp } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  LoginWrapper,
  LoginForm,
  LoginTextFieldsWrapper,
} from "./styled.elements";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  // store user login data in state
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const { login, user } = useLogin();

  return (
    <LoginWrapper>
      <LoginForm
        onSubmit={(event) => {
          event.preventDefault();
          login(username, password);
          console.log(user);
        }}
      >
        <Person sx={{ height: 170, width: 200 }} color="primary" />
        <LoginTextFieldsWrapper>
          <TextField
            label="username"
            name="username"
            color="primary"
            sx={{ margin: ".5rem 1rem", width: "90%" }}
            value={username}
            onChange={(event) => {
              setusername(event.target.value);
            }}
          />
          <TextField
            label="password"
            color="primary"
            name="password"
            sx={{ margin: "1rem 1rem", width: "90%" }}
            type="password"
            value={password}
            onChange={(event) => {
              setpassword(event.target.value);
            }}
          />
        </LoginTextFieldsWrapper>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "50%", margin: "0 auto" }}
        >
          <Typography
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
            }}
          >
            LOGIN
          </Typography>
          <LoginSharp style={{ color: "white" }} />
        </Button>

        <Typography sx={{ fontFamily: "Montserrat", marginTop: "1rem" }}>
          Don't have an account yet ?
          <Link to="/taskmern/register">sign up here</Link>
        </Typography>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
