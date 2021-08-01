import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/counterActions";
import "./cart.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { ButtonGroup } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const CartProduct = ({ image, title, qty, price, removeHandler, id }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      "& > *": {
        width: theme.spacing(220),
        height: theme.spacing(20),
      },
    },
  }));
  const count = useSelector((state) => state.counter);
  const classes = useStyles();
  const dispatch = useDispatch();
  const total = price * count;
  return (
    <div className={classes.root}>
      <Paper square elevation={3}>
        <div className="cart-product__wrapper">
          <div className="card-product__item ">
            <img className="card-product__image" src={image} alt=""></img>
          </div>
          <div className="cart-product__heading--item">{title}</div>
          <div className="cart-product__heading--item">SP-Supplier115</div>
          <div className="cart-product__heading--item">{price}</div>
          <div className="cart-product__heading--item">
            {" "}
            <div classNAme="card-product__item ">
              <Box>
                <ButtonGroup color="primary">
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
          <div className="cart-product__heading--item">{total}$</div>
          <div className="cart-product__heading--item">
            <div className="card-product__item">
              <DeleteIcon
                fontSize="large"
                style={{ color: "#5d6b9f", cursor: "pointer" }}
                onClick={() => {
                  removeHandler(id);
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};
export default CartProduct;
