import React from "react";
import Board from "./Board";

export default function TheGame() {
  return (
    <div className="App">
      <Board versionUser={true} player={"player1"}/>
      <Board versionUser={false} player={"player1"}/>
      <Board versionUser={true} player={"player2"}/>
      <Board versionUser={false} player={"player2"}/>
    </div>
  );
}
