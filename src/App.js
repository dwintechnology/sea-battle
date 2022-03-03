import './App.css';
import Board from './components/Board';
import Ship2x from './components/Ship2x';
import Ship3x from './components/Ship3x';
import Ship4x from './components/Ship4x';
import Ship6x from './components/Ship6x';

function App() {
  return (
    <div className="App">
     <h1>sea battle</h1>
     <Board versionUser={true}/>
     <Board versionUser={false}/>
     <Ship2x/>
     <Ship3x/>
     <Ship4x/>
     <Ship6x/>
    </div>
  );
}

export default App;
