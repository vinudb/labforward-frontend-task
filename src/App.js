import React from 'react';
import './App.css';
import DataVisualApp from './components/DataVisualApp';

const App = ()=>{
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">Lab Forward</div>
        <DataVisualApp />
      </div>
    </div>
  );
}

export default App;
