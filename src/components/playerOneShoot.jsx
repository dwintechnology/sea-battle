import React from "react";
import { useNavigate } from "react-router";
import Board from "./Board";

export default function PlayerOneShoot() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Player One please move your mouse over the board and click to shoot
      </div>
      <Board versionUser={true} player={"player1"} />
      <Board versionUser={false} player={"player1"} />
      <button onClick={() => navigate("/game/battleShip")}>player 2</button>
    </div>
  );
}
