import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 223,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider({
  text,
  handleFilterPrice,
  value,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="range-slider">{text}</div>
      <Slider
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        color="secondary"
        onClick={handleFilterPrice}
        min={0}
        max={1000}
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
