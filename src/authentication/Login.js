import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./authentication.css";
import logo from "../assets/logo.png";
import { useHistory } from "react-router";
import { login } from "../API";
import { useCallback } from "react";
import Button from "@material-ui/core/Button";
import { TextField, InputAdornment } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IconButton } from "@material-ui/core";

function LoginForm() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const LoggedIn = useCallback(() => {
    history.push("/catalog");
  }, [history]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const performLogIn = (values) => {
    login(values.email, values.password)
      .then((res) => {
        LoggedIn();
      })
      .catch((error) => {
        alert("email or password is incorrect!!!");
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={performLogIn}
    >
      {(formik) => {
        return (
          <Form className="form__wrapper">
            <div className="form__dialog form__dialog--login">
              <div className="form__header form__header--login">
                <div className="form__logo">
                  <img src={logo} alt="" />
                </div>
                <h3 className="form__title">Members Log In</h3>
              </div>
              <TextField
                placeholder="E-mail"
                name="email"
                label="E-mail"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                style={{ width: "80%", color: "grey" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                placeholder="Password"
                name="password"
                label="Password"
                variant="outlined"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                style={{ width: "80%", color: "grey" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKeyIcon color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <span className="login__forgot-password">Forgot password?</span>
              <div className="login__button">
                <Button
                  className="clear"
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ width: "80%", height: 45 }}
                  disabled={!formik.isValid}
                >
                  Submit
                </Button>
              </div>
              <span className="social__title">Or Log In With</span>
              <div className="social__buttons">
                <img
                  src="https://app.365dropship.com/gmail.285cd2a6d2400e92b9c8.png"
                  alt=""
                />
                <i class="fab fa-facebook-f"></i>
              </div>
              <span className="login__info">
                Don't have an account?{" "}
                <strong>
                  <a className="login-to-signUp" href="/register">
                    Sign Up
                  </a>
                </strong>
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
