import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

const Questions = () => {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState(['', '', '']); // Initialize with three empty input fields
  const [questionsList, setQuestionsList] = useState([]); // List to store added questions

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleInputChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const handleSaveQuestions = () => {
    // Save only non-empty questions to the list
    setQuestionsList([...questionsList, ...questions.filter(q => q.trim() !== '')]);
    setQuestions(['', '', '']); // Reset fields after saving
    toggleDialog(); // Close the dialog after saving
  };

  return (
    <>
      <div
        className="SelectionPanel"
        style={{
          width: 425.47,
          height: 106,
          paddingLeft: 24,
          paddingRight: 24,
          background: 'white',
          boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.25)',
          borderRadius: 10,
          border: '2px #5C9AFF solid',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 16,
          display: 'inline-flex'
        }}
        onClick={toggleDialog}
      >
        <div
          className="Frame1000008202 cursor-pointer"
          style={{
            flex: '1 1 0',
            height: 106,
            paddingTop: 8,
            paddingBottom: 8,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 16,
            display: 'flex',
            background: "none",
          }}
        >
          <svg
            style={{ width: 'fit-content', background: "white", }}
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
            className="Content"
            style={{
              flex: 1,
              height: '100%',
              padding: 16,
              borderRadius: 8,
              display: 'flex',
              flexDirection: "column",
              justifyContent: "center",
              alignItems: 'center',
              background: "white",
            }}
          >
            <div
              className="Heading flex flex-col justify-center"
              style={{
                color: '#5C9AFF',
                fontSize: 24,
                fontFamily: 'SF UI Text',
                fontWeight: 600,
                lineHeight: '28px',
                wordWrap: 'break-word',
                background: "white",
              }}
            >
              <span> {questionsList.length ? 'Custom questions' : 'Type custom interview questions'} </span>
              <span className='text-[15px] text-black mt-[8px]' style={{fontWeight: '400'}}> {questionsList.length ? `${questionsList.length} Question${questionsList.length !== 1 ? 's' : ''} Added` : ''}              </span>
            </div>
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
          style={{
            display: 'flex',
            justifyContent: 'flex-end'
          }}
        >
          <div style={{ width: 'fit-content' }}>
            <svg
              onClick={toggleDialog}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{ cursor: 'pointer' }}
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
            fontFamily: 'SF UI Text',
            fontWeight: 600,
            padding: 0
          }}
        >
          Type custom interview questions
        </DialogTitle>


        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

          <hr style={{ width: '100%', margin: '16px 0 24px 0' }} />

          {questions.map((question, index) => (
            <div
              key={index}
              className="InputContainer"
              style={{
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                borderRadius: '8px',
          border: '0.5px solid var(--color-text--faint, #353535)',
          background: 'var(--color---faint, #EBEBEB)',
          }}
        >
          <input
            type="text"
            placeholder={`Question ${index + 1}`}
            value={question}
            onChange={(e) => handleInputChange(index, e)}
            style={{
              width: '100%',
              height: '36px',
              padding: '0 8px',
              fontSize: '16px',
              borderRadius: '6px',
              outline: 'none',
              backgroundColor: 'var(--color---faint, #EBEBEB)',
            }}
          />
          <button
            className="searchBar"
            style={{
              width: 'fit-content',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.88233 6.17627H3.58822C2.90178 6.17627 2.24346 6.44896 1.75807 6.93434C1.27269 7.41973 1 8.07805 1 8.76449V20.4115C1 21.0979 1.27269 21.7562 1.75807 22.2416C2.24346 22.727 2.90178 22.9997 3.58822 22.9997H15.2352C15.9216 22.9997 16.58 22.727 17.0654 22.2416C17.5507 21.7562 17.8234 21.0979 17.8234 20.4115V19.1174"
                stroke="#0072DC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5293 3.58836L20.4116 7.47069M22.204 5.63952C22.7136 5.12984 23 4.43857 23 3.71777C23 2.99697 22.7136 2.3057 22.204 1.79602C21.6943 1.28634 21.003 1 20.2822 1C19.5614 1 18.8701 1.28634 18.3605 1.79602L7.47052 12.6471V16.5295H11.3528L22.204 5.63952Z"
                stroke="#0072DC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ))}
      </div>

      <div
        style={{
          marginTop: 24,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button onClick={handleSaveQuestions} className="ButtonsCta" style={{ width: 137, height: 56, paddingLeft: 48, paddingRight: 48, paddingTop: 16, paddingBottom: 16, background: '#0072DC', borderRadius: 30, justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
          <div className="Text" style={{ display: 'flex', textAlign: 'center', color: 'white', fontSize: 18, fontFamily: 'SF UI  Text', fontWeight: '400', wordWrap: 'break-word' }}>Save</div>
        </button>
      </div>
    </Dialog >
    </>
  );
};

export default Questions;