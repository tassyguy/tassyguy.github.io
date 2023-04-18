import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './pages/About'
import SimpleBackdrop from './pages/SimpleBackdrop';
import FloatingActionButtons from './components/buttons/FloatingActionButtons';
import BasicSpeedDial from './components/buttons/BasicSpeedDial';
import CenteredTabs from './components/navigation/CenteredTabs'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <About></About>
      <SimpleBackdrop></SimpleBackdrop>
      <FloatingActionButtons></FloatingActionButtons>
      <BasicSpeedDial></BasicSpeedDial>
      <CenteredTabs></CenteredTabs>
    </div>
  );
}

export default App;
