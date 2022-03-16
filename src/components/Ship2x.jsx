import React from "react";
import "../styles/Ship2x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";

export default function Ship2x({ state }) {
  return (
    <div className="ship2x">
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}

Ship2x.propTypes = {
  state: PropTypes.array,
};
