import React from "react";
import "./login.css";
import { Dialog } from "@material-ui/core";
import Login from "./Login";

const LoginModal = () => {
  return (
    <div>
      <Dialog
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h2 className="dialog-regist">Log In</h2>
        <Login />
      </Dialog>
    </div>
  );
};
export default LoginModal;
