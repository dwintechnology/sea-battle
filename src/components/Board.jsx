import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import constants from "../constants/constants";
import Ship2x from "./Ship2x";
import Ship3x from "./Ship3x";
import Ship4x from "./Ship4x";
import Ship6x from "./Ship6x";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "../styles/Board.css";

Board.propTypes = {
    versionUser: PropTypes.bool,
};

Board.defaultProps = {
    versionUser: true,
};


export default function Board({ versionUser = true }) {
    const dispatch = useDispatch();
    const obj = useSelector(state => state);

    return (
        <div className="wrapper-grid">
            <div className="grid-container">
                <div className="grid-item"></div>
                {constants.boardLetter.map((el, i) =>
                    <div key={i} className="grid-item">{el}</div>
                )}
                {constants.boardLetter.map((el, i) =>
                    <>
                        <div className="grid-item">{i + 1}</div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                        <div className={clsx([versionUser ? "blueBg" : "grayBg", "grid-item , playingField"])}></div>
                    </>
                )}
            </div>
            {versionUser && <div className="grid-container transparent-grid-container">
                {obj.map((el, i) =>
                    <div key={i} style={{ gridColumnStart: el.positionX, gridColumnEnd: (el.positionX + el.length), gridRowStart: el.positionY }} className="grid-item">
                        {el.ship === "Ship2x" && <Ship2x state={el.status} />}
                        {el.ship === "Ship3x" && <Ship3x state={el.status} />}
                        {el.ship === "Ship4x" && <Ship4x state={el.status} />}
                        {el.ship === "Ship6x" && <Ship6x state={el.status} />}
                    </div>
                )}
            </div>}
            <h1 onClick={() => {
                dispatch({
                    type: "ADD", payload: {
                        ship: "Ship2x",
                        length: 2,
                        positionX: Math.floor(Math.random() * (11 - 2) + 2),
                        positionY: Math.floor(Math.random() * (12 - 2) + 2),
                        isHorizontal: true,
                        status: [false, false]
                    },
                });
            }}>butt</h1>
        </div>
    );
}
