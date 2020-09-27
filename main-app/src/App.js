import React from 'react';
import './App.css';
import MainAppLabel from './components/MainAppLabel';
import CommonLabel from 'common-app/src/components/CommonLabel';
import VideoFrame from 'common-app/src/components/VideoFrame';

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
        <VideoFrame />
      </header>
    </div>
  );
}

export default App;