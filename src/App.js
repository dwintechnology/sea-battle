import "./App.css";
import React from "react";
import { Route, Routes } from "react-router";
import Loading from "./components/loading";
import TheGame from "./components/TheGame";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/game" element={<TheGame />} />
      </Routes>
    </div>
  );
}

export default App;
