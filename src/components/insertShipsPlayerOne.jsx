import React from "react";
import { useNavigate } from "react-router";

function InsertShipsPlayerOne() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>First player insert your ships</h3>
      <button onClick={() => navigate("/insert/battleShip")}>next</button>
    </div>
  );
}
export { InsertShipsPlayerOne };
