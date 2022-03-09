import React from "react";

import "../styles/Ship6x.css";
import MarkOnShip from "./MarkOnShip";

export default function Ship6x({ state }) {
  return (
    <div className="ship6x">
      {state?.map((el, i) => (
        <MarkOnShip state={el} key={i} />
      ))}
    </div>
  );
}
