import React from "react";
import { useNavigate } from "react-router";

export default function PlayerTwoShoot() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Player Two please move your mouse over the board and click to shoot
      </div>
      <button onClick={() => navigate("/game/battleShip")}>player 2</button>
    </div>
  );
}
