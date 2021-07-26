import "./landingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="page-wrapper">
      <div className="landingPage__container">
        <div className="header__left">
          <img
            src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/group-30.png"
            alt="headerlogo"
          />
        </div>
        <div className="header__right">
          <button className="landingPage-btn">ABOUT</button>
          <Link to="/catalog" style={{ textDecoration: "none" }}>
            <button className="landingPage-btn landingPage-btn-link">
              CATALOG
            </button>
          </Link>
          <button className="landingPage-btn">PRICING</button>
          <button className="landingPage-btn">SUPPLIERS</button>
          <button className="landingPage-btn">HELP CENTER</button>
          <button className="landingPage-btn">BLOG</button>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <button className="landingPage-btn btn-signup"> SIGN UP NOW</button>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="landingPage-btn btn-login landingPage-btn-link">
              {" "}
              LOGIN
            </button>
          </Link>
          <div className="landingPage__social">
            <a
              style={{ display: "table-cell" }}
              href="https://www.facebook.com/365Dropship"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <img
        className="landingPage__img"
        width="100%"
        src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/hero-1.jpg"
        alt="back"
      />
      <div className="banner__wrapper">
        <div className="content__wrapper">
          <img
            src="https://mk0q365dropshipe482k.kinstacdn.com/wp-content/uploads/2020/06/356Logo.svg"
            alt="365dp"
          />
          <h4 className="content__text">WE GOT YOUR SUPPLY CHAIN COVERED</h4>
          <h4 className="content__text">365 DAYS A YEAR!</h4>
        </div>

        <Link to="/register" style={{ textDecoration: "none" }}>
          <div className="signup">
            <button className="home-btn btn-signup btn-signup-center">
              {" "}
              SIGN UP NOW
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
