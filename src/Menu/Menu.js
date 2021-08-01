import "./menu.css";
import logo from "../assets/logo.png";
import user from "../assets/user.jpg";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="menu">
      <ul className="menu__nav">
        <Link to="/dropship">
          <li className="menu__item">
            <img className="menu__logo" src={logo} alt=""></img>
          </li>
        </Link>
        <Link to="/user">
          <li className="menu__item menu__item--circle">
            <img className="user__image" src={user} alt=""></img>
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="menu__item">
            <i className="fas fa-tachometer-alt"></i>
          </li>{" "}
        </Link>
        <Link to="/catalog">
          <li className="menu__item">
            <i className="fas fa-list-ul"></i>
          </li>
        </Link>
        <Link to="/inventory">
          <li className="menu__item">
            <i className="fas fa-box"></i>
          </li>{" "}
        </Link>
        <Link to="/cart">
          <li className="menu__item">
            <i className="fas fa-shopping-cart"></i>
          </li>
        </Link>
        <Link to="/orders">
          <li className="menu__item">
            <i className="fas fa-clipboard-check"></i>
          </li>{" "}
        </Link>
        <Link to="/transactions">
          <li className="menu__item">
            <i className="fas fa-exchange-alt"></i>
          </li>
        </Link>
        <Link to="/store">
          <li className="menu__item">
            <i className="fas fa-clipboard-list"></i>
          </li>{" "}
        </Link>
      </ul>
    </aside>
  );
};

export default Menu;
