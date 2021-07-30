import "./product.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectOne } from "../redux/products/ProductActions";
import { removeOne } from "../redux/products/ProductActions";
import Box from "@material-ui/core/Box";
import { ButtonGroup } from "@material-ui/core";

const Product = ({ title, price, image, product, id, onOpen }) => {
  const [style, setStyle] = useState({ opacity: 0, display: "none" });
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  const selectProductHandler = () => {
    if (selectedProducts.includes(id)) {
      dispatch(removeOne(id));
    } else dispatch(selectOne(id));
  };

  const handleIncrement = (event) => {
    event.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const handleDecrement = (event) => {
    event.stopPropagation();
    setCount((prev) => {
      if (prev > 0) return prev - 1;
      else return prev;
    });
  };

  return (
    <div
      className={`product
    ${selectedProducts.includes(id) ? "product--active" : ""}`}
      onMouseEnter={(e) => {
        setStyle({ opacity: 1, display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ opacity: 0, display: "none" });
      }}
    >
      <div
        className={`product__hover 
        ${selectedProducts.includes(id) ? "product__hover--active" : ""}`}
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
            className="product__button"
            style={style}
          >
            add to inventory{" "}
          </Button>
        </div>
      </div>
      <div className="product__wrapper" onClick={() => onOpen(product.id)}>
        <div className="product__image">
          <img src={image} alt="" />
        </div>
        <div className="product__bottom">
          <div className="product__title--wrapper">
            <div className="product__title">{title}</div>
            <div className="product__supplier--wrapper">
              <div className="product__supplier">
                <div className="product__button--supplier">
                  <button className="product__button--supplier product__button--black">
                    {" "}
                    By:
                  </button>{" "}
                  PL-Supplier149
                </div>
                <Box>
                  <ButtonGroup color="primary">
                    <Button onClick={handleDecrement}>-</Button>
                    <Button disabled style={{ color: "grey" }}>
                      {count}
                    </Button>
                    <Button onClick={handleIncrement}>+</Button>
                  </ButtonGroup>
                </Box>
              </div>
            </div>
          </div>

          <ul className="product__price">
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
        </div>
      </div>
    </div>
  );
};

export default Product;
