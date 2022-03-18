import React from "react";
import "../styles/Ship3x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";
export default function Ship3x({ state, isHorizontal = true }) {
  return (
    <div className={isHorizontal ? "ship3x" : "ship3x , isVerticalShip3x"}>
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}
Ship3x.propTypes = {
  state: PropTypes.array,
  isHorizontal: PropTypes.bool,
};