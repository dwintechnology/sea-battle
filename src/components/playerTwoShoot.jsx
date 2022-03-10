import React from "react";
import { useNavigate } from "react-router";
import Board from "./Board";

export default function PlayerTwoShoot() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Player Two please move your mouse over the board and click to shoot
      </div>
      <Board versionUser={true} player={"player2"}/>
      <Board versionUser={false} player={"player2"}/>
      <button onClick={() => navigate("/game/battleShip")}>player 2</button>
    </div>
  );
}
