import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./authentication.css";
import logo from "../assets/logo.png";
import { useHistory } from "react-router";
import { login } from "../API";
import { useCallback } from "react";
import Button from "@material-ui/core/Button";

function LoginForm() {
  const history = useHistory();

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
            <div className="form__dialog">
              <div className="form__header">
                <div className="form__logo">
                  <img src={logo} alt="" />
                </div>
                <h2 className="form__title">Log In</h2>
              </div>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                className="form__input"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
                className="form__input"
              />

              {/* <button type="submit" disabled={!formik.isValid}></button> */}
              <div className="login__button">
                <Button
                  className="clear"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
