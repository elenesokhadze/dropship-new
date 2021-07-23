import "./header.css";
import Search from "./Search";
import Sort from "./Sort";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const Header = ({ checkedProducts, clearAll, selectAll }) => {
  const products = useSelector((state) => state.product.products);

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__select">
            <Button variant="contained" color="primary" onClick={selectAll}>
              SELECT ALL
            </Button>

            <div className="header__text">
              selected {checkedProducts.length} out of {products.length}{" "}
              products
            </div>
            {checkedProducts.length > 0 ? (
              <Button
                className="clear"
                variant="contained"
                color="primary"
                onClick={clearAll}
              >
                CLEAR ALL{" "}
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
