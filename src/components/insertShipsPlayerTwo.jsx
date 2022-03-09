import React from "react";
import { useNavigate } from "react-router";

function InsertShipsPlayerTwo() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Second player insert your ships</h3>
      <button onClick={() => navigate("/game/playerOneShoot")}>next</button>
    </div>
  );
}
export { InsertShipsPlayerTwo };
