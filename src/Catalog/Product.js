import "./product.css";
import { useState } from "react";
import Modal from "./Modal.js";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectOne } from "../redux/products/ProductActions";
import { removeOne } from "../redux/products/ProductActions";

const Product = ({ title, price, image, product, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({ opacity: 0, display: "none" });

  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  const selectProductHandler = () => {
    if (selectedProducts.includes(id)) {
      dispatch(removeOne(id));
    } else dispatch(selectOne(id));
  };
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
    ${selectedProducts.includes(id) ? "catalog__item--active" : ""}`}
      onMouseEnter={(e) => {
        setStyle({ opacity: 1, display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ opacity: 0, display: "none" });
      }}
    >
      <div
        className={`catalog__hover 
        ${selectedProducts.includes(id) ? "catalog__hover--active" : ""}`}
      >
        <div className="hover__wrapper">
          <label className="checkbox__container">
            <input
              onClick={(e) => e.stopPropagation()}
              type="checkbox"
              className="checkbox"
              checked={selectedProducts.includes(id)}
              onChange={selectProductHandler}
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
