import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChartView from './components/ChartView';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: '600px', height:'300px'}}>
        <ChartView />
        </div>
      </header>
    </div>
  );
}

export default App;
