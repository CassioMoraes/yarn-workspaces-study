import React from 'react';
import './App.css';
import MainAppLabel from './components/MainAppLabel';
import CommonLabel from 'common-app/src/components/CommonLabel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
         <MainAppLabel />
        <CommonLabel />
      </header>
    </div>
  );
}

export default App;