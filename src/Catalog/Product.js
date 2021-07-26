import "./product.css";
import { useState } from "react";
import Modal from "./Modal.js";
import Button from "@material-ui/core/Button";

const Product = ({
  title,
  price,
  image,
  product,
  checkedProducts,
  checkboxChanged,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({ opacity: 0, display: "none" });

  const onClose = (event) => {
    event.stopPropagation();
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div
      className={`catalog__item
    ${checkedProducts.includes(product) ? "catalog__item--active" : ""}`}
      onMouseEnter={(e) => {
        setStyle({ opacity: 1, display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ opacity: 0, display: "none" });
      }}
    >
      <div
        className={`catalog__hover 
        ${checkedProducts.includes(product) ? "catalog__hover--active" : ""}`}
      >
        <div className="hover__wrapper">
          <label className="checkbox__container">
            <input
              onClick={(e) => e.stopPropagation()}
              type="checkbox"
              className="checkbox"
              checked={checkedProducts.includes(product)}
              onChange={() => checkboxChanged(product)}
            />
            <span className="checkmark"></span>
          </label>
          <Button
            variant="contained"
            color="primary"
            className="catalog__button"
            style={style}
          >
            add to inventory{" "}
          </Button>
        </div>
      </div>
      <div className="catalog__image">
        <img src={image} alt="" />
      </div>
      <div className="catalog__title" onClick={onOpen}>
        {" "}
        {title}
      </div>
      <div className="catalog__supplier">
        {" "}
        BY:{" "}
        <button className="catalog__button--supplier">PL-Supplier149</button>
      </div>
      <ul className="catalog__price" onClick={onOpen}>
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
