import React from "react";
import "../styles/Ship2x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";

export default function Ship2x({ state, isHorizontal = true }) {
  return (
    <div className={isHorizontal ? "ship2x" : "ship2x , isVerticalShip2x"}>
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}

Ship2x.propTypes = {
  state: PropTypes.array,
  isHorizontal: PropTypes.bool,
};
