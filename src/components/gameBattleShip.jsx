import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function GameBattleShip() {
  const navigate = useNavigate();
  const obj = useSelector((state) => state);

  return (
    <div>
      <div>BattleShip</div>
      <button
        onClick={() =>
          navigate(
            obj.currnecyPlayer == "player1"
              ? "/game/playerOneShoot"
              : "/game/playerTwoShoot"
          )
        }
      >
        <p>next {obj.currnecyPlayer}</p>
      </button>
    </div>
  );
}
