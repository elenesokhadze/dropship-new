import "./aside.css";
import SliderContainer from "./SliderContainer";

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
      <SliderContainer />
    </div>
  );
};

export default Aside;
