'use client';

import { CardType } from '@/app/AddNewCardsQuest';
import { useState } from 'react';

function Card({ data }: { data: CardType }) {
  const [termOrAnswer, setTermOrAnswer] = useState();

  return (
    <div className="relative flex h-[300px] w-3/4 items-center justify-center bg-red-300">
      <div className="text-[48px] font-semibold">{termOrAnswer}</div>
      <button className="btn btn-soft btn-info absolute right-5 bottom-2">
        Show answer
      </button>
    </div>
  );
}

export default Card;
