import React, { useState } from 'react';
import Dashboard from './components/dashboard';
import Display from './components/display'
import './App.css';

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);
  
  return (
    <div className="App">
      <h1>At Bat</h1>
      <Display 
      balls={balls}
      strikes={strikes}/>
      <Dashboard 
      balls={balls}
      setBalls={setBalls}
      strikes={strikes}
      setStrikes={setStrikes}/>
    </div>
  );
}

export default App;
