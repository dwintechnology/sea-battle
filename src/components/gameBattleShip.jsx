import React from "react";
import { useNavigate } from "react-router";

export default function GameBattleShip() {
  const navigate = useNavigate();

  return (
    <div>
      <div>BattleShip</div>
      <button onClick={() => navigate("/game/playerTwoShoot")}>xxxxxx</button>
    </div>
  );
}
