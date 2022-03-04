import React from "react";
import PropTypes from "prop-types";

import constants from "../constants/constants";
import "../styles/Board.css";
import clsx from "clsx";

Board.propTypes = {
  versionUser: PropTypes.bool,
};
Board.defaultProps = {
  versionUser: true,
};
export default function Board({ versionUser }) {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item"></div>
        {constants.boardLetter.map((el, i) => (
          <div key={i} className="grid-item">
            {el}
          </div>
        ))}
        {constants.boardLetter.map((el, i) => (
          <>
            <div className="grid-item">{i + 1}</div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
            <div
              className={clsx([
                versionUser ? "blueBg" : "grayBg",
                "grid-item , playingField",
              ])}
            ></div>
          </>
        ))}
      </div>
    </>
  );
}
