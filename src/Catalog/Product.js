import "./product.css";

import { useState } from "react";
import Modal from "./Modal.js";

const Product = ({ title, price, image, product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="catalog__item" onClick={onOpen}>
      <input
        type="checkbox"
        className="radio"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="catalog__image">
        <img src={image} alt="" />
      </div>
      <div className="catalog__title"> {title}</div>
      <div className="catalog__supplier">
        {" "}
        BY:{" "}
        <button className="catalog__button--supplier">PL-Supplier149</button>
      </div>
      <ul className="catalog__price">
        <li className="price__item">
          <strong>${price}</strong>
          <span>RRP</span>
        </li>
        |
        <li className="price__item">
          <strong>${price}</strong>
          <span>COST</span>
        </li>
        |
        <li className="price__item">
          <strong className="price__item--blue">${price}</strong>
          <span>PROFIT</span>
        </li>
      </ul>
      <Modal product={product} isOpen={isOpen} onClose={onClose}></Modal>
    </div>
  );
};

export default Product;