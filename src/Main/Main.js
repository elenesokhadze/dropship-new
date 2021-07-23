import Header from "../Header/Header";
import "./main.css";
import React from "react";
import Aside from "../Aside/Aside";
import Menu from "../Menu/Menu";
import Catalog from "../Catalog/Catalog";
import { useState } from "react";
import { useSelector } from "react-redux";

const Main = () => {
  const [checkedProducts, setCheckedProducts] = useState([]);
  const products = useSelector((state) => state.product.products);

  const checkboxChanged = (id) => {
    if (checkedProducts.includes(id)) {
      setCheckedProducts(checkedProducts.filter((i) => i !== id));
    } else setCheckedProducts([...checkedProducts, id]);
  };

  const selectAll = () => {
    setCheckedProducts(products);
    console.log("elene");
  };

  const clearAll = () => {
    setCheckedProducts([]);
  };
  return (
    <div className="container">
      <Menu />
      <Aside />
      <main className="main">
        <div className="main__container">
          <Header
            checkedProducts={checkedProducts}
            selectAll={selectAll}
            clearAll={clearAll}
          />
          <Catalog
            checkedProducts={checkedProducts}
            checkboxChanged={checkboxChanged}
          />
        </div>
      </main>
    </div>
  );
};

export default Main;
