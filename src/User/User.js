import Logout from "./Logout";
import "./user.css";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const User = () => {
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
    </div>
  );
};

export default User;
