import React from "react";
import "../styles/MarkOnShip.css";
import clsx from "clsx";
import PropTypes from "prop-types";


export default function MarkOnShip({state}) {
  return (
    <div className={clsx([state ? "killed" : "noKilled" ])}></div>
  );
}

MarkOnShip.propTypes = {
  state: PropTypes.bool,
};
