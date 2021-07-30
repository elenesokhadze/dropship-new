import React from "react";
import RangeSlider from "./RangeSlider";
import Button from "@material-ui/core/Button";
import { filterProducts } from "../redux/products/ProductActions";
import { useDispatch, useSelector } from "react-redux";

const SliderContainer = () => {
  const products = useSelector((state) => state.product.products);
  const allProducts = useSelector((state) => state.product.allProducts);

  const [value, setValue] = React.useState([0, 400]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();

  const handleFilterPrice = (event) => {
    event.stopPropagation();
    const filteredProducts = products.filter((product) => {
      return product.price >= value[0] && product.price <= value[1];
    });
    console.log(filterProducts(filteredProducts));
    dispatch(filterProducts(filteredProducts));
  };
  const resethandleFilterPrice = () => {
    setValue([0, 400]);
    dispatch(filterProducts(allProducts));
  };

  return (
    <div className="button__container">
      <div className="slider">
        <RangeSlider
          text="PRICE RANGE"
          handleFilterPrice={handleFilterPrice}
          value={value}
          handleChange={handleChange}
        />
        <RangeSlider
          text="PROFIT RANGE"
          handleFilterPrice={handleFilterPrice}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <div className="button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={resethandleFilterPrice}
          style={{ width: "230px", height: "38px" }}
        >
          Reset Filter{" "}
        </Button>
      </div>
    </div>
  );
};

export default SliderContainer;
