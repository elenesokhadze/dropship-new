import "./aside.css";
import RangeSlider from "./RangeSlider";
import Button from "@material-ui/core/Button";

const Aside = () => {
  return (
    <div className="aside__category">
      <div className="dropdown">
        <select className="category category--blue">
          <option>Choose Niche</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="dropdown">
        <select className="category category--babyBlue">
          <option>Choose Category</option>
          <option>Australia</option>
          <option>China</option>
          <option>France</option>
        </select>
      </div>
      <div className="aside__menu">
        <div className="dropdown">
          <select className="dropbtn">
            <option>Ship From</option>
            <option>Australia</option>
            <option>China</option>
            <option>France</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="dropbtn">
            <option>Ship To</option>
            <option>Australia</option>
            <option>China</option>
            <option>France</option>
          </select>
        </div>
        <div className="dropdown">
          <select className="dropbtn">
            <option>Select Supplier</option>
            <option>Australia</option>
            <option>China</option>
            <option>France</option>
          </select>
        </div>
      </div>
      <div className="button__container">
        <div className="slider">
          <RangeSlider text="PRICE RANGE" />
          <RangeSlider text="PROFIT RANGE" />
        </div>
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: "250px" }}
          >
            Reset Filter{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Aside;
