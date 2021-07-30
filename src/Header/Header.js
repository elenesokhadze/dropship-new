import "./header.css";
import Search from "./Search";
import Sort from "./Sort";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectAll } from "../redux/products/ProductActions";
import { removeAll } from "../redux/products/ProductActions";

const Header = () => {
  const products = useSelector((state) => state.product.products);
  const selectedProducts = useSelector(
    (state) => state.product.selectedProducts
  );
  const dispatch = useDispatch();
  const selectAllHandler = () => {
    const allProductsId = products.map((product) => product.id);
    dispatch(selectAll(allProductsId));
  };
  const clearAllHandler = () => {
    const clearProducts = [];
    dispatch(removeAll(clearProducts));
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__nav">
          <div className="header__select">
            <Button
              variant="contained"
              color="primary"
              onClick={selectAllHandler}
              style={{ width: "120px", height: "30px" }}
            >
              SELECT ALL
            </Button>
            <div className="header__text">
              selected {selectedProducts.length} out of {products.length}{" "}
              products
            </div>
            {selectedProducts.length > 0 ? (
              <Button
                className="clear"
                variant="contained"
                color="primary"
                onClick={clearAllHandler}
                style={{ height: "30px" }}
              >
                CLEAR SELECTED{" "}
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>
        <Search />
      </div>
      <Sort />
    </header>
  );
};

export default Header;
