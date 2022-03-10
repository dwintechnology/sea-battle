import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import constants from "../constants/constants";
import Ship2x from "./Ship2x";
import Ship3x from "./Ship3x";
import Ship4x from "./Ship4x";
import Ship6x from "./Ship6x";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Board.css";
import MarkOnShip from "./MarkOnShip";

Board.propTypes = {
  versionUser: PropTypes.bool,
  player: PropTypes.string,
};

Board.defaultProps = {
  versionUser: true,
};

export default function Board({ versionUser, player }) {
  const obj = useSelector((state) => state);
  const dispatch = useDispatch();
  git 
    function getPosition(i, j) {
        dispatch({
            type: "SHOOT", payload: {
                player: player,
                positionY: i + 1,
                positionX: j + 1,
            }
        });
    }

    return (
        <div className="wrapper-grid">
            <div className="grid-container">
                <div className="grid-item"></div>
                {constants.boardLetter.map((el, i) =>
                    <div key={i} className="grid-item">{el}</div>
                )}
                {constants.boardLetter.map((el, i) =>
                    <>
                        <div key={i} className="grid-item">{i + 1}</div>
                        {constants.boardLetter.map((el, j) => {
                            const shootInPosition = obj[player == "player1" ? "player2Shoots" : "player1Shoots"].find(shoot => shoot.positionX === j + 1 && shoot.positionY === i + 1);
                            if (versionUser === false && shootInPosition) {
                                return (
                                    <div key={el} id={i + 1 + el} className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}>
                                        <MarkOnShip state={shootInPosition.isHit} />
                                    </div>
                                );

                            }
                            return (
                                <div key={el} id={i + 1 + el} onClick={() => { getPosition(i, j); }} className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                            );
                        }
                        )}
                    </>
                )}
            </div>
            {versionUser && <div className="grid-container transparent-grid-container">
                {obj[player]?.map((el, i) =>
                    <div key={i} style={{ gridColumnStart: el.positionX, gridColumnEnd: (el.positionX + el.length), gridRowStart: el.positionY }} className="grid-item">
                        {el.ship === "Ship2x" && <Ship2x state={el.status} />}
                        {el.ship === "Ship3x" && <Ship3x state={el.status} />}
                        {el.ship === "Ship4x" && <Ship4x state={el.status} />}
                        {el.ship === "Ship6x" && <Ship6x state={el.status} />}
                    </div>
                )}
                {obj[`${player}Shoots`].map((el, i) => {
                    if (el.isHit == false) {
                        return (
                            <div key={i} style={{ gridColumnStart: el.positionX + 1, gridRowStart: el.positionY + 1 }} className="grid-item">
                                <MarkOnShip state={false} />
                            </div>
                        );
                    }
                })}
            </div>}
        </div>
      )}
    </div>
  );
}
