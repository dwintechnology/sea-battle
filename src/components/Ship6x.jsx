import React from "react";
import "../styles/Ship6x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";
export default function Ship6x({ state, isHorizontal = true }) {
  return (
    <div className={isHorizontal ? "ship6x" : "ship6x , isVertical"}>
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}
Ship6x.propTypes = {
  state: PropTypes.array,
  isHorizontal: PropTypes.bool,
};