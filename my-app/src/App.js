import logo from './logo.svg';
import './App.css';
import SumInput from './components/SumCaculattor';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adding Two Numbers</h1>

        <SumInput/>
        <Countdown/>
      </header>
    </div>
  );
}

export default App;
