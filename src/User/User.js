import Logout from "./Logout";
import "./user.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Paper from "@material-ui/core/Paper";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import user from "../assets/user.jpg";

const User = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(3),
        width: theme.spacing(220),
        height: theme.spacing(97),
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className="user">
      <span className="user__heading">
        <h3 className="user__title">MY PROFILE</h3>
        <div className="user__heading--right">
          <Logout />
          <div>
            <HelpOutlineIcon className="FAQ" />
          </div>
        </div>
      </span>
      <div className={classes.root}>
        <Paper square elevation={3}>
          <div className="user__profile-heading">
            <div className="user__profile-heading--wrapper">
              <div className="user__profile-heading--left">
                <h4>PROFILE</h4>
                <h4>BILLING</h4>
              </div>
              <div className="user__profile-heading--leftLess">
                <h4>INVOICE HISTORY</h4>
              </div>
            </div>
            <div className="user__profile-heading--right">
              <Button
                className="clear"
                variant="contained"
                color="secondary"
                type="submit"
              >
                DEACTIVATE ACCOUNT{" "}
              </Button>
            </div>
          </div>
          <div className="user__info">
            <div className="user__top">
              <div className="user-container">
                <h3 className="user-container__title">PROFILE PICTURE</h3>
                <div className="user-container__item user__profile-picture">
                  <div className="user-container__item--picture">
                    <img src={user} alt=""></img>
                  </div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ width: "35%" }}
                  >
                    Upload{" "}
                  </Button>
                </div>
              </div>
              <div className="user-container">
                <h3 className="user-container__title">PERSONAL DETAILS</h3>
                <div className="user-container__item user__personal-details">
                  <div className="user-container__item--title">First Name</div>
                  <TextField
                    placeholder="First Name"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                  <div className="user-container__item--title">Last Name</div>
                  <TextField
                    placeholder="Last Name"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                  <div className="user-container__item--title">Country</div>
                  <TextField
                    placeholder="Country"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
            <div className="user__bottom">
              <div className="user-container">
                <h3 className="user-container__title">CHANGE PASSWORD</h3>
                <div className="user-container__item user__change-password">
                  <div className="user-container__item--title">
                    Current Password
                  </div>
                  <TextField
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                  <div className="user-container__item--title">
                    New Password
                  </div>
                  <TextField
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                  <div className="user-container__item--title">
                    Confirm New Password
                  </div>
                  <TextField
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div className="user-container">
                <h3 className="user-container__title"> CONTACT INFORMATION</h3>
                <div className="user-container__item user__contact-information">
                  <div className="user-container__item--title">Email</div>
                  <TextField
                    placeholder="Email
                    "
                    size="small"
                    variant="outlined"
                    style={{ width: "80%", color: "grey" }}
                  />
                  <div className="user-container__item--title">Skype</div>
                  <TextField
                    placeholder="Skype"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                  <div className="user-container__item--title">Phone</div>
                  <TextField
                    placeholder="Phone"
                    size="small"
                    variant="outlined"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
            <div className="user__button--container">
              <Button
                className="clear"
                variant="contained"
                color="primary"
                type="submit"
              >
                Save Changes{" "}
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default User;
