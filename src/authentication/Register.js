import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./authentication.css";
import { useHistory } from "react-router";
import { register } from "../API";
import logo from "../assets/logo.png";
import Button from "@material-ui/core/Button";
import { TextField, InputAdornment } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { useState } from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { IconButton } from "@material-ui/core";

function Register() {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const performRegister = (values) => {
    register(
      values.firstName,
      values.lastName,
      values.email,
      values.password,
      values.passwordConfirmation
    )
      .then(() => {
        registered();
      })
      .catch(() => {
        alert("Ooooops..Something went wrong!");
      });
  };

  const registered = () => {
    history.push("/login");
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={performRegister}
    >
      {(formik) => {
        return (
          <Form className="form__wrapper">
            <div className="form__dialog form__dialog--register">
              <div className="form__header">
                <div className="form__logo">
                  <img src={logo} alt="" />
                </div>
                <h3 className="form__title">Sign Up</h3>
              </div>
              <TextField
                placeholder="First Name"
                name="firstName"
                label="First Name"
                className="field"
                variant="outlined"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                style={{ width: "80%", color: "grey" }}
                color="primary"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                placeholder="Last Name"
                name="lastName"
                label="Last Name"
                variant="outlined"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                style={{ width: "80%", color: "grey" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
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
              <TextField
                placeholder="Confirm Password"
                name="passwordConfirmation"
                label="Confirm Password"
                variant="outlined"
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.passwordConfirmation &&
                  Boolean(formik.errors.passwordConfirmation)
                }
                helperText={
                  formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation
                }
                type={showPassword ? "text" : "password"}
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
              <div className="register__button">
                <Button
                  className="clear"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!formik.isValid}
                  style={{ width: "80%", height: 45 }}
                >
                  Sign Up{" "}
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
                Already have an account?{" "}
                <strong>
                  <a className="login-to-signUp" href="/login">
                    Sign in
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

export default Register;
