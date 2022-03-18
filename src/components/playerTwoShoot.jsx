import React from "react";
// import { useNavigate } from "react-router";
import Board from "./Board";

export default function PlayerTwoShoot() {
  // const navigate = useNavigate();
  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
      backgroundColor: "#0000008a",
      alignItems: "center",
    }}
    >
      <Board versionUser={true} player={"player2"} />
      <Board versionUser={false} player={"player2"} />
      {/* <button onClick={() => navigate("/game/battleShip")}>player 2</button> */}
    </div>
  );
}
