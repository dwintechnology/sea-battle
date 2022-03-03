import { Route, Routes } from 'react-router';
import './App.css';
import Loading from './components/loading';
import TheGame from './components/TheGame';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Loading height={66} width={700} />} />

    <Route path="/game" element={<TheGame />} />
    </Routes>
    </div>
  );
}

export default App;
