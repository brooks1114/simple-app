import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome'
// import Clock from './components/clock/Clock'
import ClockFunction from './components/clock/ClockFunction'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Welcome name="Erik" />
          <ClockFunction />
          <Contact />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
