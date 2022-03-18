import React from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Board from "./Board";
import Ship2x from "./Ship2x";
import Ship3x from "./Ship3x";
import Ship4x from "./Ship4x";
import Ship6x from "./Ship6x";
import "../styles/buttons.css";

function InsertShipsPlayerTwo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const obj = useSelector((state) => state);

  function showButton() {
    let arr = [];
    let res = false;

    obj.player2.map((el) => {
      arr.push(el.positionX);
    });
    if (!arr.includes(false)) {
      res = true;
    }

    return res;
  }

  const eventLogger = (e, data, index) => {
    const firstCell = document.getElementById("1A");
    const rect = firstCell.getBoundingClientRect();
    const boxPositionX = rect.x;
    const boxWidth = rect.width;
    let shipY = data.y;

    const elementIndexX = Math.round(
      (Math.floor(data.x) - boxPositionX) / boxWidth
    );
    const newPositionY = 12 + -1 * Math.floor((-1 * shipY - 10) / boxWidth);

    obj?.player2?.map((i, ind) => {
      if (ind === index) {
        let positionY = newPositionY;
        if (positionY > 0) {
          positionY = newPositionY;
        }
        if (
          positionY > 1 &&
          positionY < 12 &&
          elementIndexX + 2 > 1 &&
          elementIndexX + 2 < 12  
        ) {
          dispatch({
            type: "SET_SHIP_POSITION",
            payload: {
              player: "player2",
              positionY,
              positionX: elementIndexX + 2,
              shipIndex: index,
            },
          });
        }else {
          alert("Please steer the boat onto the board");
        }
      } 
    });
  };

  return (
    <div style={{ backgroundColor: "#0000008a", height: "100vh" }}>
      <div style={{ display: "inline-block" }}>
        <h3 style={{ color: "white" }}>DEAR SECOND PLAYER INSERT YOUR SHIPS</h3>
        <Board versionUser={true} player={"player2"}>
          {obj.player2.map((el, index) => (
            <Draggable
              key={index}
              defaultPosition={{ x: 50, y: 0 }}
              onStop={(e, d) => eventLogger(e, d, index)}
              bounds="parent"
            >
              <div key={index} style={{ width: "fit-content" }}>
                {el.ship === "Ship2x" &&
                  el.positionX == false &&
                  el.positionY == false && (
                    <Ship2x
                      state={el.status}
                      style={{ display: "inline-block" }}
                    />
                  )}
                {el.ship === "Ship3x" &&
                  el.positionX == false &&
                  el.positionY == false && (
                    <Ship3x
                      state={el.status}
                      style={{ display: "inline-block" }}
                    />
                  )}
                {el.ship === "Ship4x" &&
                  el.positionX == false &&
                  el.positionY == false && (
                    <Ship4x
                      state={el.status}
                      style={{ display: "inline-block" }}
                    />
                  )}
                {el.ship === "Ship6x" &&
                  el.positionX == false &&
                  el.positionY == false && (
                    <Ship6x
                      state={el.status}
                      style={{ display: "inline-block" }}
                    />
                  )}
              </div>
            </Draggable>
          ))}
        </Board>

        {showButton() && (
          <button
            style={{ marginTop: "5%" }}
            className="button-32"
            onClick={() => navigate("/game/playerOneShoot")}
          >
            next
          </button>
        )}
      </div>
    </div>
  );
}
export { InsertShipsPlayerTwo };
