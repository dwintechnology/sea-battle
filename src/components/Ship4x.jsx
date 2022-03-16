import React from "react";
import "../styles/Ship4x.css";
import MarkOnShip from "./MarkOnShip";
import PropTypes from "prop-types";

export default function Ship4x({ state }) {
  return (
    <div className="ship4x">
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}

Ship4x.propTypes = {
  state: PropTypes.array,
};
