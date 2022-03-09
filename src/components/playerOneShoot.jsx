import React from "react";
import { useNavigate } from "react-router";

export default function PlayerOneShoot() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Player One please move your mouse over the board and click to shoot
      </div>
      <button onClick={() => navigate("/game/battleShip")}>player 2</button>
    </div>
  );
}
