import "./header.css";
import Search from "./Search";
import Sort from "./Sort";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.product.products);

  return (
    <header className="header">
      <div className="container">
        <div className="header__nav">
          <div className="header__select">
            <Button variant="contained" color="primary">
              SELECT ALL
            </Button>

            <div className="header__text">
              selected {products.length} out of {products.length} products
            </div>
            <Button variant="contained" color="primary">
              CLEAR ALL{" "}
            </Button>
          </div>
        </div>
        <Search />
      </div>
      <Sort />
    </header>
  );
};

export default Header;
