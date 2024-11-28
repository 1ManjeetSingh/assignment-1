import './App.css';
import Navbar from './components/navbar/Navbar';
import ToggleButton from './components/toogleButton/ToogleButton';
import Difficulty from './components/cards/Difficulty';
import Duration from './components/cards/Duration';
import Questions from './components/cards/Questions';
import Carousel from './components/carousel/Carousel'
import InterviewButton from './components/interviewButton/InterviewButton';

function App() {
  return (
    <div className="App min-h-screen">
      <Navbar />
      <ToggleButton />
      <Carousel />
      <div className='DialogCards'>
      <Difficulty />
      <Duration />
      <Questions />
      </div>
      <div className='InterviewButton'>
        <InterviewButton />
      </div>
    </div>
  );
}

export default App;
