import Header from "../Header/Header";
import "./main.css";
import React from "react";
import Aside from "../Aside/Aside";
import Menu from "../Menu/Menu";
import Catalog from "../Catalog/Catalog";

const Main = () => {
  return (
    <div className="container">
      <Menu />
      <Aside />
      <main className="main">
        <div className="main__container">
          <Header />
          <Catalog />
        </div>
      </main>
    </div>
  );
};

export default Main;
