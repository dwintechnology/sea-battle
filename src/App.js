import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '0 15%'}}>
        <Board versionUser={true}/>
        <Board versionUser={false}/>
      </div>
    </div>
  );
}

export default App;
