import "./logout.css";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Logout = () => {
  const history = useHistory();

  const performLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      {/* <input
        className="logout"
        type="button"
        value="Sign Out"
        onClick={performLogout}
      /> */}
      <Button
        variant="contained"
        color="primary"
        onClick={performLogout}
        className="logout"
        type="button"
      >
        Sign Out{" "}
      </Button>
    </>
  );
};
export default Logout;
