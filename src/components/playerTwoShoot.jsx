import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Board from "./Board";

export default function PlayerTwoShoot() {
  const navigate = useNavigate();

  const obj = useSelector((state) => state);

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
      {/* <Board versionUser={true} player={"player2"} /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Board versionUser={false} player={"player2"} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            
          }}
        >
          {obj.player1.map((el, index) => (
            <p
              key={index}
              style={{ color: "white" , padding: "0 15%"}}
              className={clsx([!el.status.includes(false) ? "kill" : ""])}
            >
              {el.ship}
            </p>
          ))}
        </div>
      </div>
      {obj.win && navigate("/win")}
    </div>
  );
}
