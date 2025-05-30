'use client';

import { CardType } from '@/app/AddNewCardsQuest';
import { useState } from 'react';

function Card({ data }: { data: CardType }) {
  const { term, definition } = data;
  const [showAnswer, setshowAnswer] = useState(false);

  function handleShowAnswer() {
    setshowAnswer(prev => !prev);
  }

  return (
    // <div className="relative flex h-[300px] w-full items-center justify-center bg-red-300">
    //   <div className="text-[48px] font-semibold">
    //     {showAnswer ? definition : term}
    //   </div>
    //   <button
    //     className="btn btn-soft btn-info absolute right-5 bottom-2"
    //     onClick={handleShowAnswer}
    //   >
    //     Show answer
    //   </button>
    // </div>
    <div id="slide4" className="carousel-item relative w-full">
      <div className="text-[48px] font-semibold">
        {showAnswer ? definition : term}
      </div>
      <div className="absolute top-1/2 right-5 left-5 flex -translate-y-1/2 transform justify-between">
        <a href="#slide3" className="btn btn-circle">
          ❮
        </a>
        <a href="#slide1" className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
}

export default Card;
