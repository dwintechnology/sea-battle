import React from "react";
import "../styles/Ship3x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";

export default function Ship3x({ state }) {
  return (
    <div className="ship3x">
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}

Ship3x.propTypes = {
  state: PropTypes.array,
};
