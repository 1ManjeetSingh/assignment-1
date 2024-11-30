import React from 'react';

const InterviewButton = () => {
    return (
        <div class="ButtonsCta max-w-[251px] h-14 px-12 py-4 rounded-[30px] justify-center items-center gap-4 inline-flex hover:cursor-pointer" style={{background: 'var(--AI-Main-color, linear-gradient(135deg, #002DBF -1.89%, #4396F7 45.88%, #FF9BD2 76.85%, #C9FFFC 108.11%))'}}>
            <div class="Text text-center text-white text-lg font-semibold leading-[18px]">Take AI interview</div>
        </div>

    )
}

export default InterviewButton;