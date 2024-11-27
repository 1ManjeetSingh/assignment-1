import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ToggleButton from './components/toogleButton/ToogleButton';
import Difficulty from './components/cards/Difficulty';
import Duration from './components/cards/Duration';
import Questions from './components/cards/Questions';
import Carousel from './components/carousel/Carousel'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToggleButton />
      <Difficulty />
      <Duration />
      <Questions />
      <Carousel />
    </div>
  );
}

export default App;
