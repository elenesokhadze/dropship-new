import "./menu.css";
import first from "../assets/first.png";
import second from "../assets/second.jpg";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";
import sixth from "../assets/sixth.png";
import seventh from "../assets/seventh.png";
import eighth from "../assets/eighth.png";
import ninth from "../assets/ninth.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="menu">
      <ul className="menu__nav">
        <Link to="/dropship">
          <li className="menu__item">
            <img src={first} alt=""></img>
            <hr />
          </li>
        </Link>
        <Link to="/user">
          <li className="menu__item menu__item--circle">
            <img src={second} alt=""></img>
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="menu__item">
            <img src={third} alt=""></img>
          </li>{" "}
        </Link>
        <Link to="/catalog">
          <li className="menu__item">
            <img src={fourth} alt=""></img>
          </li>
        </Link>
        <Link to="/inventory">
          <li className="menu__item">
            <img src={fifth} alt=""></img>
          </li>{" "}
        </Link>
        <Link to="/cart">
          <li className="menu__item">
            <img src={sixth} alt=""></img>
          </li>
        </Link>
        <Link to="/orders">
          <li className="menu__item">
            <img src={seventh} alt=""></img>
          </li>{" "}
        </Link>
        <Link to="/transactions">
          <li className="menu__item">
            <img src={eighth} alt=""></img>
          </li>
        </Link>
        <Link to="/store">
          <li className="menu__item">
            <img src={ninth} alt=""></img>
          </li>{" "}
        </Link>
      </ul>
    </aside>
  );
};

export default Menu;
