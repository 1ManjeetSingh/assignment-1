import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ToggleButton from './components/navbar/toogleButton/ToogleButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToggleButton />
    </div>
  );
}

export default App;
