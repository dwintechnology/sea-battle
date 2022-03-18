import React from "react";
import { useSelector } from "react-redux";

export default function Win() {
  const obj = useSelector((state) => state);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{
        fontSize:"50px",
        color:"white"
      }}>The {obj.win} PLAYER WINS THIS GAME</h1>
      <a href="/">
      <button
            style={{ marginTop: "5%" }}
            className="button-32"
          >
            NEW GAME
          </button>
      </a>
    </div>
  );
}
