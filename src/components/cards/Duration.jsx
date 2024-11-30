import React, { useState } from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Select from 'react-select';

const Duration = () => {
  const [open, setOpen] = useState(false);
  const [duration, setDuration] = useState();

  const options = [
    { value: '60', label: '60 sec' },
    { value: '90', label: '90 sec' },
    { value: '120', label: '120 sec' },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#f9f9f9',
      borderColor: '#ddd',
      color: '#161616',
      height: '48px',
      fontSize: '16px',
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingRight: '35px',
      ':hover': {
        borderColor: '#aaa',
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      width: '20px',
      height: '20px',
      position: 'absolute',
      color: '#0072DC',
      top: '30%',
      right: '15px',
      padding: '0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (provided) => ({
      ...provided,
      position: 'fixed',
      backgroundColor: '#B9B9B9',
      border: '1px solid #ddd',
      borderRadius: '4px',
      zIndex: 999,
      top: 'auto',
      left: 'auto',
      maxWidth: '510px',
      maxHeight: '300px',
      overflowY: 'auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    }),

    placeholder: (provided) => ({
      ...provided,
      color: '#161616',
      fontWeight: '400'
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#161616',
      fontFamily: 'SF UI  Text',
      fontSize: '18px',
    }),
    overflow: 'hidden',
  };




  // Toggle the dialog visibility
  const toggleDialog = () => {
    setOpen(!open);
  };

  // Handle select change
  const handleChange = (selectedOption) => {
    setDuration(selectedOption.value);
  };

  return (
    <>
      {/* Selection Panel */}
      <div
        onClick={toggleDialog}
        className="SelectionPanel hover:transform hover:scale-[1.01]  w-[425px] h-[106px] px-[24px] bg-white rounded-[10px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.25)] border-[2px] border-[#5C9AFF] inline-flex items-center justify-start gap-[16px] cursor-pointer"
      >
        <div className="Frame1000008202 cursor-pointer flex-[1_1_0] h-[106px] pt-[8px] pb-[8px] justify-start items-center gap-[16px] flex bg-none" >          <svg className='w-fit bg-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
          <g clip-path="url(#clip0_13_56)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6258 1.62951C11.6258 1.34367 11.7417 1.06953 11.9479 0.867404C12.1541 0.66528 12.4338 0.551727 12.7254 0.551727H18.5896C18.8813 0.551727 19.1609 0.66528 19.3671 0.867404C19.5733 1.06953 19.6892 1.34367 19.6892 1.62951C19.6892 1.91536 19.5733 2.1895 19.3671 2.39162C19.1609 2.59375 18.8813 2.7073 18.5896 2.7073H12.7254C12.4338 2.7073 12.1541 2.59375 11.9479 2.39162C11.7417 2.1895 11.6258 1.91536 11.6258 1.62951ZM15.6575 5.5814C12.4497 5.5814 9.37331 6.83047 7.10505 9.05384C4.8368 11.2772 3.56251 14.2927 3.56251 17.4371C3.56251 20.5814 4.8368 23.5969 7.10505 25.8203C9.37331 28.0436 12.4497 29.2927 15.6575 29.2927C18.8653 29.2927 21.9417 28.0436 24.21 25.8203C26.4782 23.5969 27.7525 20.5814 27.7525 17.4371C27.7525 14.2927 26.4782 11.2772 24.21 9.05384C21.9417 6.83047 18.8653 5.5814 15.6575 5.5814ZM1.36342 17.4371C1.36342 9.69854 7.76277 3.42583 15.6575 3.42583C23.5522 3.42583 29.9516 9.69854 29.9516 17.4371C29.9516 25.1756 23.5522 31.4483 15.6575 31.4483C7.76277 31.4483 1.36342 25.1756 1.36342 17.4371ZM15.6575 10.6111C15.9491 10.6111 16.2288 10.7246 16.435 10.9267C16.6412 11.1289 16.7571 11.403 16.7571 11.6889V17.4371C16.7571 17.7229 16.6412 17.997 16.435 18.1992C16.2288 18.4013 15.9491 18.5148 15.6575 18.5148C15.3659 18.5148 15.0862 18.4013 14.88 18.1992C14.6738 17.997 14.558 17.7229 14.558 17.4371V11.6889C14.558 11.403 14.6738 11.1289 14.88 10.9267C15.0862 10.7246 15.3659 10.6111 15.6575 10.6111Z" fill="#0072DC" />
          </g>
          <defs>
            <clipPath id="clip0_13_56">
              <rect width="30.8965" height="30.8965" fill="white" transform="translate(0.120453 0.551727)" />
            </clipPath>
          </defs>
        </svg>
          <div className=" cursor-pointer Content flex-1 h-full p-[16px] rounded-[8px] flex flex-col justify-center items-center bg-white" >
            <div
              className="Heading text-[#5C9AFF] text-[24px] font-semibold leading-[28px] break-words bg-none" >
              Duration per question
            </div>
            <div className='text-[#333232] text-lg  mt-2'
            >{duration} {duration ? 'sec' : ''}</div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={toggleDialog}
        sx={{
          "& .MuiDialog-paper": {
            width: '707px',
            borderRadius: '10px',
            border: '1px solid var(--logo-gr-Blue-to-pink, #D388FF)',
            background: "#FFF",
            boxShadow: '0px 0px 4px 0px #D388FF',
            padding: '24px 24px 80px',
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
            padding: 0,
          }}
        >
          Duration per question

        </DialogTitle>

        <div
          className="p-5 flex flex-col items-center gap-2"
        >

          <hr className='w-[full] mb-8' />

          <Select
            defaultValue={options.find((opt) => opt.value === duration)}
            options={options}
            styles={customStyles}
            onChange={handleChange}
            value={options.find(option => option.value === duration)}
            placeholder="Select time"
          />
        </div>
      </Dialog>
    </>
  );
};

export default Duration;