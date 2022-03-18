import React from "react";
// import { useNavigate } from "react-router";
import Board from "./Board";

export default function PlayerOneShoot() {
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
      <Board versionUser={true} player={"player1"} />
      <Board versionUser={false} player={"player1"} />
    </div>
  );
}
