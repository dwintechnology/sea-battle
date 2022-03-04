import React from "react";
import Board from "./Board";
import Ship2x from "./Ship2x";
import Ship3x from "./Ship3x";
import Ship4x from "./Ship4x";
import Ship6x from "./Ship6x";
export default function TheGame() {
  return (
    <div className="App">
      <Board versionUser={true} />
      <Board versionUser={false} />
      <Ship2x />
      <Ship3x />
      <Ship4x />
      <Ship6x />
    </div>
  );
}
