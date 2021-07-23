import React from "react";
import "./registerModal.css";
import { Dialog } from "@material-ui/core";
import Register from "./Register";

const RegisterModal = () => {
  return (
    <div>
      <Dialog
        open={true}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <h2 className="dialog-regist">Registration</h2>
        <Register />
      </Dialog>
    </div>
  );
};
export default RegisterModal;
