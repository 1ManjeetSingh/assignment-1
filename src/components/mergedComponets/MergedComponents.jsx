import './index.css';
import Navbar from '../navbar/Navbar';
import ToggleButton from '../toogleButton/ToogleButton';
import Difficulty from '../cards/Difficulty';
import Duration from '../cards/Duration';
import Questions from '../cards/Questions';
import Carousel from '../carousel/Carousel'
import InterviewButton from '../interviewButton/InterviewButton';

function MergedComponents() {
  return (
    <div className="App min-h-screen bg-[#F1F4F8]">
      <Navbar />
      <ToggleButton />
      <Carousel />
      <div className='DialogCards w-full flex justify-center gap-8 px-12 my-8'>
      <Difficulty />
      <Duration />
      <Questions />
      </div>
      <div className='InterviewButton flex justify-end px-12 pb-12'>
        <InterviewButton />
      </div>
    </div>
  );
}

export default MergedComponents;