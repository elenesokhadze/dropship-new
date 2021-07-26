// import React, { useState } from "react";

// import { Button } from "@material-ui/core";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [passwordConfirmation, setPasswordConfirmation] = useState("");

//   const history = useHistory();

//   const performRegister = (e) => {
//     e.preventDefault();
//     register(firstName, lastName, email, password, passwordConfirmation)
//       .then((res) => {
//         registered();
//       })
//       .catch((error) => {
//         alert("Ooooops..Something went wrong!");
//       });
//   };

//   const registered = () => {
//     history.push("/login");
//   };

//   return (
//     <form className="Register" onSubmit={performRegister}>
//       <div>
//         <input
//           type="text"
//           name="firstname"
//           placeholder="Firstname.."
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           name="lastname"
//           placeholder="Lastname.."
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email.."
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <input
//           type="Password"
//           name="ConfirmPassword"
//           placeholder="Confirm Password"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <input type="submit" value="Register" className="sign-up-btn" />
//       </div>
//     </form>
//   );
// };
// export default Register;

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import "./authentication.css";
import { useHistory } from "react-router";
import { register } from "../API";
import logo from "../assets/logo.png";
import Button from "@material-ui/core/Button";

function Register() {
  const history = useHistory();

  const performRegister = (values) => {
    // e.preventDefault();
    // console.log(
    //   "Form data",
    //   values.firstName,
    //   values.lastName,
    //   values.email,
    //   values.password,
    //   values.confirmPassword
    // );

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

  // const checkToken = (history) => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     history.push(`/login`);
  //   }
  // };
  const registered = () => {
    history.push("/login");
  };

  // const registered = () => {
  //   history.push("/login");
  // };
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

  // const onSubmit = (values) => {
  //   console.log("Form data", values);
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={performRegister}
    >
      {(formik) => {
        return (
          <Form className="form__wrapper">
            <div className="form__dialog">
              <div className="form__header">
                <div className="form__logo">
                  <img src={logo} alt="" />
                </div>
                <h2 className="form__title">Sign Up</h2>
              </div>
              <FormikControl
                control="input"
                type="text"
                placeholder="First Name"
                name="firstName"
                className="form__input"
              />
              <FormikControl
                control="input"
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="form__input"
              />
              <FormikControl
                control="input"
                type="email"
                placeholder="E-mail"
                name="email"
                className="form__input"
              />
              <FormikControl
                control="input"
                type="password"
                placeholder="Password"
                name="password"
                className="form__input"
              />
              <FormikControl
                control="input"
                type="password"
                placeholder="Confirm Password"
                name="passwordConfirmation"
                className="form__input"
              />
              <div className="register__button">
                <Button
                  className="clear"
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={!formik.isValid}
                >
                  Sign Up{" "}
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Register;
