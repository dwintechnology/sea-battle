import React from "react";
import "../styles/MarkOnShip.css";
import clsx from "clsx";

export default function MarkOnShip({ state }) {
  return <div className={clsx([state ? "killed" : "noKilled"])}></div>;
}
