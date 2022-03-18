import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import BattleShip from "./components/battleShip";
import GameBattleShip from "./components/gameBattleShip";
import { InsertShipsPlayerOne } from "./components/insertShipsPlayerOne";
import { InsertShipsPlayerTwo } from "./components/insertShipsPlayerTwo";
import Loading from "./components/loading";
import PlayerOneShoot from "./components/playerOneShoot";
import PlayerTwoShoot from "./components/playerTwoShoot";
import Win from "./components/Win";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/win" element={<Win />} />
        <Route path="/insert/playerOne" element={<InsertShipsPlayerOne />} />
        <Route path="/insert/playerTwo" element={<InsertShipsPlayerTwo />} />
        <Route path="/insert/battleShip" element={<BattleShip />} />
        <Route path="/game/playerOneShoot" element={<PlayerOneShoot />} />
        <Route path="/game/playerTwoShoot" element={<PlayerTwoShoot />} />
        <Route path="/game/battleShip" element={<GameBattleShip />} />
      </Routes>
    </div>
  );
}

export default App;
