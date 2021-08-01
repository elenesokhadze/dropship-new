import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { ButtonGroup } from "@material-ui/core";
import "./product.css";
import { selectOne } from "../redux/products/ProductActions";
import { removeOne } from "../redux/products/ProductActions";
import { increment } from "../redux/counter/counterActions";
import { decrement } from "../redux/counter/counterActions";
import { addToCart } from "../API";

const Product = ({ title, price, image, product, id, onOpen }) => {
  const [style, setStyle] = useState({ opacity: 0, display: "none" });

  const dispatch = useDispatch();
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );

  const count = useSelector((state) => state.counter);

  const selectProductHandler = () => {
    if (selectedProducts.includes(id)) {
      dispatch(removeOne(id));
    } else dispatch(selectOne(id));
  };
  const addToInventory = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(id, 1).then(() => {
      console.log("success");
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
            onClick={addToInventory}
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
                  <ButtonGroup
                    onClick={(e) => e.stopPropagation()}
                    color="primary"
                  >
                    <Button
                      onClick={() => {
                        dispatch(decrement());
                      }}
                    >
                      -
                    </Button>
                    <Button disabled style={{ color: "grey" }}>
                      {count}
                    </Button>
                    <Button
                      onClick={() => {
                        dispatch(increment());
                      }}
                    >
                      +
                    </Button>
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
