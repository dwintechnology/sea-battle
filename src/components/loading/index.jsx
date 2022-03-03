import React, { useEffect, useState } from "react";
import Battleship from "../../assets/img/Battleship.png";
import Ship from "../../assets/img/Ship.svg";
import Ship2 from "../../assets/img/Ship2.svg";
import Ship3 from "../../assets/img/Ship3.svg";
import Ship4 from "../../assets/img/Ship4.svg";
import Ship5 from "../../assets/img/Ship5.svg";
import { useNavigate } from "react-router";
import "./style.css";
const Loading = ({ height, width }) => {
  const [progress, setProgress] = useState(10);
  const [isActive, setIsActive] = useState(true);
  const [dotCount, setDotCount] = useState(1);
  const navigate = useNavigate();
  
 
  const Parentdiv = {
    height: height,
    width: width || "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
  };

  const Childdiv = {
    height: "100%",
    width: progress,
    backgroundColor: "orange",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FF0055",
    border: "2px solid #FFFFFF",
    boxSizing: "border-box",
    borderRadius: " 12px",
  };

  const progresstext = {
    color: "white",
    fontWeight: 900,
    display: "flex",
    fontSize: "25px",
    padding: "30px",
    width: "50%",
    alignItems: "center",
    marginLeft: "25%",
  };

  const loadDiv = {
    marginTop: "200px",
    width: "70%",
    height: "800px",
    marginLeft: "15%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContetn: "center",
  };
  useEffect(() => {
    let interval = null;
    if (isActive && progress <= width * 0.8 - 10) {
      interval = setInterval(() => {
        setProgress((prevState) => {
          return prevState + Math.floor(Math.random() * 10) * 10;
        });
        setDotCount((prevState) => {
          return prevState == 3 ? 1 : prevState + 1;
        });
      }, 300);
    } else {
      clearInterval(interval);
      setIsActive(false);
      // navigate('/dgerdg')
    }
    return () => clearInterval(interval);
  }, [isActive, progress]);

  return (
    <div className="loadingBody">
      <div style={loadDiv}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#FAEC00", fontSize: "35px" }}>
            THE CLASSIC NAVAL COMBAT GAME
          </p>
        </div>
        <div>
          <img
            style={{ maxWidth: "700px", marginBottom: "70px" }}
            src={Battleship}
          />
        </div>
        <div>
          <div  className="container">
            <div style={Parentdiv}>
              <div style={Childdiv} />
            </div>
            <div>
              <img src={Ship} className="ship" alt="ship" />
              <img src={Ship2} className="ship2" alt="ship2" />
              <img src={Ship3} className="ship3" alt="ship3" />
              <img src={Ship4} className="ship4" alt="ship4" />
              <img src={Ship5} className="ship5" alt="ship5" />
            </div>
            <div style={progresstext}>
              <span>LOADING</span>
              <span>{`${".".repeat(dotCount)}`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
