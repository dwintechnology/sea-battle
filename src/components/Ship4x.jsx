import React from "react";
import "../styles/Ship4x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";
export default function Ship4x({ state, isHorizontal = true }) {
  return (
    <div className={isHorizontal ? "ship4x" : "ship4x , isVerticalShip4x"}>
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}
Ship4x.propTypes = {
  state: PropTypes.array,
  isHorizontal: PropTypes.bool,
};