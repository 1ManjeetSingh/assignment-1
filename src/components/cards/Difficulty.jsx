import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const Difficulty = () => {
  const [open, setOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState();

  const handleSelection = (level) => {
    setSelectedLevel(level); // Update selected level
    setOpen(false); // Close dialog on selection
  };

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Trigger Button (Selection Panel) */}
      <div
        className="SelectionPanel hover:transform hover:scale-[1.01]  w-[425px] h-[106px] px-[24px] bg-white rounded-[10px] shadow-[0px_2px_12px_rgba(0,_0,_0,_0.25)] border-[2px] border-[#5C9AFF] inline-flex items-center justify-start gap-[16px] cursor-pointer"
        onClick={toggleDialog}
      >
        <div
          className="Frame1000008202 cursor-pointer flex-[1_1_0] h-[106px] pt-[8px] pb-[8px] justify-start items-center gap-[16px] flex bg-none"
        >
          <svg
            className="w-fit bg-white"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="34"
            viewBox="0 0 32 34"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1035 32.4483C16.1035 32.4483 28.9771 26.269 28.9771 17V4.64138L16.1035 1.55173L3.22998 4.64138V17C3.22998 26.269 16.1035 32.4483 16.1035 32.4483Z"
              stroke="#0072DC"
              strokeWidth="2.57471"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div
            className="Content flex-1 h-full p-[16px] rounded-[8px] flex flex-col justify-center items-center bg-white " >
            <div
              className="Heading text-[#5C9AFF] text-[24px] font-semibold leading-[28px] break-words bg-none" >
              Difficulty Level
            </div>
            {/* Display Selected Level */}
            <div className="text-[#333232] text-[18px]  mt-[8px]" >
              {selectedLevel}
            </div>
          </div>
        </div>
      </div>

      {/* Dialog with Difficulty Selector */}
      <Dialog
        sx={{
          "& .MuiDialog-paper": {
            width: '707px',
            borderRadius: '10px',
            border: '1px solid var(--logo-gr-Blue-to-pink, #D388FF)',
            background: "#FFF",
            boxShadow: '0px 0px 4px 0px #D388FF',
            paddingBottom: '48px',
          },
          '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
          },
        }}
        open={open}
        onClose={toggleDialog}
      >
        <div
          className="flex justify-end pt-[24px] pr-[24px]"
        >
          <div className="w-fit">
            <svg
              onClick={toggleDialog}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="self-end cursor-pointer"
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
            padding: 0,
          }}        >
          Difficulty Level
        </DialogTitle>
        <div
          className="p-5 flex flex-col items-center gap-2"
        >
          <hr className="w-[85%] mb-6" />

          {/* Difficulty Options */}
          {["Beginner", "Intermediate", "Advanced"].map((level) => (
            <div
              key={level}
              onClick={() => handleSelection(level)}
              className="w-[85%] p-2 cursor-pointer rounded-lg flex items-center gap-2"
            >
              <input
                type="radio"
                name="difficulty"
                value={level}
                checked={selectedLevel === level}
                onChange={() => handleSelection(level)}
                className="w-[20px] h-[20px] accent-[#0072DC]"
              />
              <span className={`text-[16px] text-[#161616] font-[SF\ UI\ TEXT] ${selectedLevel === level ? 'font-bold' : 'font-normal'}`}>
                {level}
              </span>
            </div>
          ))}
        </div>
      </Dialog>
    </>
  );
};

export default Difficulty;