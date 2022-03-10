import React from "react";
import { useNavigate } from "react-router";
import Board from "./Board";

function InsertShipsPlayerTwo() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Second player insert your ships</h3>
      <Board versionUser={true} player={"player2"}/>
      <Board versionUser={false} player={"player2"}/>
      <button onClick={() => navigate("/game/playerOneShoot")}>next</button>
    </div>
  );
}
export { InsertShipsPlayerTwo };
