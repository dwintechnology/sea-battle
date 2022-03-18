import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "../components/loading/style.css";
import Battleship from "../assets/img/Battleship.png";

import Ship from "../assets/img/Ship.svg";
import Ship2 from "../assets/img/Ship2.svg";
import Ship3 from "../assets/img/Ship3.svg";
import Ship4 from "../assets/img/Ship4.svg";
import Ship5 from "../assets/img/Ship5.svg";

export default function GameBattleShip() {
  const navigate = useNavigate();
  const obj = useSelector((state) => state);

  return (
    <div className="loadingBody">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#FAEC00", fontSize: "35px" }}>
          THE CLASSIC NAVAL COMBAT GAME
        </p>
      </div>

      <img
        style={{ width: "40%", paddingBottom: "5%", margin: "0 auto" }}
        src={Battleship}
      />

      <div>
        <img src={Ship} className="ship" alt="ship" />
        <img src={Ship2} className="ship2" alt="ship2" />
        <img src={Ship3} className="ship3" alt="ship3" />
        <img src={Ship4} className="ship4" alt="ship4" />
        <img src={Ship5} className="ship5" alt="ship5" />
      </div>
      <button
      className="button-33"
        onClick={() =>
          navigate(
            obj.currnecyPlayer == "player1"
              ? "/game/playerOneShoot"
              : "/game/playerTwoShoot"
          )
        }
      >
        <p> NEXT</p>
      </button>
    </div>
  );
}
