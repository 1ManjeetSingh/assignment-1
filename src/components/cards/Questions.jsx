import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

import image5 from '../../assets/Group.svg';

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState(['', '', '']); // Initialize with three empty input fields
  const [questionsList, setQuestionsList] = useState([]); // List to store added questions
  const [focusedInputs, setFocusedInputs] = useState(
    new Array(questions.length).fill(false) // Array to track focus state for each input
  );

  const handleFocus = (index) => {
    const newFocusState = [...focusedInputs];
    newFocusState[index] = true;
    setFocusedInputs(newFocusState);
  };

  const handleBlur = (index) => {
    const newFocusState = [...focusedInputs];
    newFocusState[index] = false;
    setFocusedInputs(newFocusState);
  };

  const toggleDialog = () => {
    if (open) {
      // Reset questions only if they are empty
      if (questions.every(q => q.trim() === '')) {
        setQuestions(['', '', '']); // Reset only if no data has been entered
      }
    }
    setOpen(!open); // Toggle the dialog open/close state
  };

  const handleInputChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions); // Update questions without resetting them
  };

  const handleSaveQuestions = () => {

    setQuestionsList([...questions.filter(q => q.trim() !== '')]);

    toggleDialog(); // Close the dialog after saving
  };


  return (
    <>
      <div
        className="SelectionPanel hover:transform hover:scale-[1.01]  w-[425px] h-[106px] px-[24px] bg-white rounded-[10px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.25)] border-[2px] border-[#5C9AFF] inline-flex items-center justify-start gap-[16px] cursor-pointer"
        onClick={toggleDialog}
      >
        <div
          className="Frame1000008202 cursor-pointer flex-[1_1_0] h-[106px] pt-[8px] pb-[8px] justify-start items-center gap-[16px] flex bg-none" >
          <svg
            className='w-fit bg-white'
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7.08335 6.72795H5.25077C4.27872 6.72795 3.34647 7.1141 2.65913 7.80145C1.97178 8.48879 1.58563 9.42104 1.58563 10.3931V26.8862C1.58563 27.8583 1.97178 28.7905 2.65913 29.4779C3.34647 30.1652 4.27872 30.5514 5.25077 30.5514H21.7439C22.716 30.5514 23.6482 30.1652 24.3356 29.4779C25.0229 28.7905 25.4091 27.8583 25.4091 26.8862V25.0537"
              stroke="#0072DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.1982 5.3067L26.8305 10.939M29.4308 8.28244C30.1702 7.54301 30.5856 6.54014 30.5856 5.49444C30.5856 4.44874 30.1702 3.44587 29.4308 2.70645C28.6914 1.96702 27.6885 1.55162 26.6428 1.55162C25.5971 1.55162 24.5942 1.96702 23.8548 2.70645L8.05615 18.4488V24.0811H13.6885L29.4308 8.28244Z"
              stroke="#0072DC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className="cursor-pointer Content flex-1 h-full p-[16px] rounded-[8px] flex flex-col justify-center items-center bg-white"
          >
            <div
              className="Heading text-[#5C9AFF] text-[24px] font-semibold leading-[28px] break-words bg-none" >
              {questionsList.length ? 'Custom questions' : 'Type custom interview questions'}
            </div>
            <div className='text-[#333232] text-lg  mt-2'> {questionsList.length ? `${questionsList.length} Question${questionsList.length !== 1 ? 's' : ''} Added` : ''}</div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={toggleDialog}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '10px',
            border: '1px solid var(--logo-gr-Blue-to-pink, #D388FF)',
            background: "#FFF",
            boxShadow: '0px 0px 4px 0px #D388FF',
            padding: '24px'
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
      >
        <div
          className='flex justify-end'
        >
          <div className='w-fit'>
            <svg
              onClick={toggleDialog}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className='cursor-pointer'
              aria-hidden="true"
            >
              <path
                d="M28.8336 3.16676C27.8211 2.1542 26.1795 2.1541 25.1669 3.16655L15.9987 12.3334L6.83302 3.16687C5.82052 2.15428 4.17885 2.15428 3.16635 3.16687V3.16687C2.15398 4.17933 2.15398 5.82075 3.16635 6.83321L12.3324 16L3.16635 25.1669C2.15398 26.1793 2.15398 27.8208 3.16635 28.8332V28.8332C4.17885 29.8458 5.82052 29.8458 6.83302 28.8332L15.9987 19.6667L25.1669 28.8335C26.1795 29.846 27.8211 29.8459 28.8336 28.8333V28.8333C29.846 27.8208 29.846 26.1793 28.8336 25.1668L19.6676 16L28.8336 6.83332C29.846 5.8208 29.846 4.17928 28.8336 3.16676V3.16676Z"
                fill="#0072DC"
              />
            </svg>
          </div>
        </div>
        <DialogTitle
          style={{
            textAlign: 'center',
            color: '#333232',
            fontSize: 32,
            fontWeight: 600,
            padding: 0
          }}
        >
          Type custom interview questions
        </DialogTitle>


        <div className='flex flex-col gap-4'>

          <hr className='w-full mt-4 mb-6' />

          {questions.map((question, index) => (
            <div
              key={index}
              className="InputContainer px-6 py-4 flex items-center gap-4 rounded-lg border border-[0.5px] border-[#353535] bg-[#EBEBEB]"
            >
              <input
                type="text"
                placeholder={`Question ${index + 1}`}
                value={question}
                onFocus={() => handleFocus(index)}
                onBlur={() => handleBlur(index)}
                onChange={(e) => handleInputChange(index, e)}
                className={`w-full h-9 text-[16px] rounded-md outline-none justify-start px-2 bg-[#EBEBEB] ${focusedInputs[index] ? 'border-b border-gray-500' : ''}`}
              />
              <button
                className="searchBar w-fit bg-transparent cursor-pointer flex justify-center outline-none border-none"
              >
                <img src={image5} alt="" />
              </button>
            </div>
          ))}
        </div>

        <div
          className='mt-6 flex justify-center'
        >
          <button onClick={handleSaveQuestions} className="ButtonsCta w-[137px] h-[56px] px-[48px] py-[16px] bg-[#0072DC] rounded-[30px] justify-center items-center gap-[16px] inline-flex outline-none border-none">
            <div className="Text flex text-center text-white text-[18px] font-sans font-[400] break-words " >Save</div>
          </button>
        </div>
      </Dialog >
    </>
  );
};

export default Questions;