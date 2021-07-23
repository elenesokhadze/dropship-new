import React, { useState, useEffect, useCallback } from "react";
import "./login.css";
import { useHistory } from "react-router";
import { login } from "../API";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const LoggedIn = useCallback(() => {
    history.push("/catalog");
  }, [history]);

  const performLogIn = (e) => {
    e.preventDefault();
    login(email, password)
      .then((res) => {
        LoggedIn();
      })
      .catch((error) => {
        alert("email or password is incorrect!!!");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      LoggedIn();
    }
  }, [LoggedIn]);

  return (
    <form className="Login" onSubmit={performLogIn}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" value="Log In" className="sign-up-btn" />
      </div>
    </form>
  );
};
export default Login;
