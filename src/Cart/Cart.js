import "./cart.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CartProduct from "./CartProduct";
import { removeFromCart } from "../API";
import { useState } from "react";
import { cart } from "../API";

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    cart().then((res) => {
      setCartList(res.cartItem.items);
    });
  }, []);
  console.log(cartList);

  const removeHandler = async (id) => {
    await removeFromCart(id);
    cart().then((res) => {
      setCartList(res.cartItem.items);
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(2),
        width: theme.spacing(220),
        height: theme.spacing(10),
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className="cart">
      <span className="cart__heading">
        <h3 className="cart__title">SHOPPING CART (0)</h3>
        <div className="cart__heading--right">
          <div>
            <HelpOutlineIcon className="FAQ" />
          </div>
        </div>
      </span>
      <div className={classes.root}>
        <Paper square elevation={3}>
          <div className="cart-product__heading--wrapper">
            <div className="cart-product__heading--item">ITEM IMAGE</div>
            <div className="cart-product__heading--item">ITEM TITLE</div>
            <div className="cart-product__heading--item">SUPPLIER</div>
            <div className="cart-product__heading--item">ITEM PRICE</div>
            <div className="cart-product__heading--item">ITEM QUANTITY</div>
            <div className="cart-product__heading--item">TOTAL PRICE</div>
            <div className="cart-product__heading--item">REMOVE ITEM</div>
          </div>
        </Paper>
      </div>

      <div className="cart__product-container">
        {cartList.length > 0
          ? cartList.map((product, id) => {
              return (
                <CartProduct
                  id={product.id}
                  key={id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  removeHandler={() => removeHandler(product.id)}
                  qty={product.qty}
                />
              );
            })
          : null}
      </div>
      <div className={classes.root}>
        <Paper square elevation={3}>
          <div className="cart-product__order--wrapper">
            <div>
              <Link to="./catalog" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className="cart__logout"
                  type="button"
                >
                  Continue Shopping{" "}
                </Button>{" "}
              </Link>
            </div>
            <div className="cart-product__order--left cart-product__order--lessGap">
              <div className="cart-product__order__item">
                BALANCE:
                <span className="cart-product__order__item cart-product__order__item--blue">
                  $0.00
                </span>
              </div>
              <div className="cart-product__order__item">
                ITEM PRICE:{" "}
                <span className="cart-product__order__item cart-product__order__item--blue">
                  $0.00
                </span>
              </div>
              <div className="cart-product__order__item">
                ORDER TOTAL:
                <span className="cart-product__order__item cart-product__order__item--blue">
                  $0.00
                </span>
              </div>
              <Link to="./transactions" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className="cart__logout"
                  type="button"
                >
                  Checkout{" "}
                </Button>{" "}
              </Link>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default Cart;
