// import React, { useState, useEffect, useCallback } from "react";
// import "./login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const performLogIn = (e) => {
//     e.preventDefault();
//     login(email, password)
//       .then((res) => {
//         LoggedIn();
//       })
//       .catch((error) => {
//         alert("email or password is incorrect!!!");
//       });
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       LoggedIn();
//     }
//   }, [LoggedIn]);

//   return (
//     <form className="Login" onSubmit={performLogIn}>
//       <div>
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <div>
//         <input type="submit" value="Log In" className="sign-up-btn" />
//       </div>
//     </form>
//   );
// };
// export default Login;
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

  const onSubmit = (values) => {
    console.log("Form data", values);
  };
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
