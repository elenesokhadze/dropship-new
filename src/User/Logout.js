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
      <Button
        variant="contained"
        color="primary"
        onClick={performLogout}
        className="logout"
        type="button"
        style={{ backgroundColor: "#E6EEFC", color: "#79A6F3" }}
      >
        Sign Out{" "}
      </Button>
    </>
  );
};
export default Logout;
