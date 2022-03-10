import React from "react";
import { useNavigate, useParams } from "react-router";
import Board from "./Board";
 

function InsertShipsPlayerOne() {
  const navigate = useNavigate();
  const porcnakan = useParams();
  console.log(porcnakan);

  return (
    <div>
      <h3>First player insert your ships</h3>
      <Board versionUser={true} player={"player1"}/>
      <Board versionUser={false} player={"player1"} />



      <button onClick={() => navigate("/insert/battleShip")}>next</button>
    </div>
  );
}
export { InsertShipsPlayerOne };
