import logo from './logo.svg';
import './App.css';
import SumInput from './components/SumCaculattor';
import Countdown from './components/Countdown';
import SearchFilter from './components/SearchFilter';
import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Adding Two Numbers</h1>

        <SumInput/>
        <Countdown/>
        <SearchFilter/>
        <LoginForm/>
        <ToDoList/>
      </header>
    </div>
  );
}

export default App;
