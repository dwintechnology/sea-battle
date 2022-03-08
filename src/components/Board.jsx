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
// import MarkOnShip from "./MarkOnShip";

Board.propTypes = {
    versionUser: PropTypes.bool,
    player: PropTypes.string,
};

Board.defaultProps = {
    versionUser: true,
};


export default function Board({ versionUser = true, player }) {

    const obj = useSelector(state => state);
    const dispatch = useDispatch();
    let lastShoot = obj[`${player}Shoots`][obj[`${player}Shoots`].length - 1];

    function getPosition(event, i, j) {
        console.log(event);
        event.target.style.backgroundColor = "rgba(26, 52, 68, 0.2)";
        // event.target.dataset =  <MarkOnShip state={false}/>;
        dispatch({
            type: "SHOOT", payload: {
                player: player,
                positionY: i + 1,
                positionX: j + 1,
            }
        });
    }

    
    function hit(player,index,inHitIndex){
        dispatch({
            type: "IS_HIT", payload: {
                player: player,
                index: index,
                inHitIndex: inHitIndex,
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
                        <div key={0} className="grid-item">{i + 1}</div>
                        {constants.boardLetter.map((el, j) =>
                            <div key={el} id={i + 1 + el} onClick={(event) => { getPosition(event, i, j); }} className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
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
{/* obj[`${player}Shoots`][obj[`${player}Shoots`].length - 1] */}
                {obj[player]?.map((el, index)=>{
                    if(obj[`${player}Shoots`].length != 0 &&  el.positionX - 1 <= lastShoot.positionX && el.positionY - 1 == lastShoot.positionY && el.isHorizontal == true && (el.positionX + el.length-1)  >= lastShoot.positionX){
                        console.log("el.positionX - 1", el.positionX - 1);
                        console.log("lastShoot.positionX", lastShoot.positionX);
                        console.log("el.positionY - 1", el.positionY - 1);
                        console.log("lastShoot.positionY", lastShoot.positionY);
                        console.log("(el.positionX + el.length )", el.positionX + el.length);
                        console.log("(lastShoot.positionX )", lastShoot.positionX);

                       if(obj[player][index].status[lastShoot.positionX - 1] == false){
                           hit(player,index,lastShoot.positionX - 1);
                       }
                    }
                })
                }

                    {/* // <div key={i} style={{ gridColumnStart: el.positionX + 1, gridRowStart: el.positionY + 1 }} className="grid-item">
                    //     <MarkOnShip state={false} />
                    // </div> */}
            </div>}
        </div>
    );
}
