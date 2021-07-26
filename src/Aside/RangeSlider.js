import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { useDispatch } from "react-redux";
import { filterProducts } from "../redux/products/ProductActions";

const useStyles = makeStyles({
  root: {
    width: 240,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({ text }) {
  const classes = useStyles();
  const [value, setValue] = React.useState([1, 9999]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const handleFilterPrice = (value) => {
    dispatch(filterProducts(value[0], value[1]));
  };

  return (
    <div className={classes.root}>
      <div className="range-slider">{text}</div>
      <Slider
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        color="secondary"
        onClick={handleFilterPrice}
      />
      <div className="range__container">
        <div className="range range__min">
          <div className="range__item range__item--small">$</div>
          <div className="range__item ">{value[0]}</div>
        </div>
        <div className="range range__max">
          <div className="range__item range__item--small">$</div>
          <div className="range__item">{value[1]}</div>
        </div>
      </div>
    </div>
  );
}
