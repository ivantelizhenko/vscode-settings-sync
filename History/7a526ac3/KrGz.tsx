'use client';

import { CardType } from '@/app/AddNewQuest';
import { ChangeEvent, useEffect, useState } from 'react';

function CreateCardForm() {
  const [inputProps, setInputProps] = useState<CardType>({
    id: Math.random().toString(),
    term: '',
    definition: '',
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputProps(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="mb-4 flex flex-col gap-8 rounded-xl bg-primary p-8">
      {/* <div className="mb-2 flex items-center justify-between">
        <button className="btn btn-square btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div> */}
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card grid flex-grow place-items-center rounded-box">
          <label className="input input-bordered flex w-full items-center gap-2">
            Term:
            <input
              maxLength={40}
              type="text"
              className="grow"
              name="term"
              defaultValue={inputProps.term}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card grid flex-grow place-items-center rounded-box">
          <label className="input input-bordered flex w-full items-center gap-2">
            Definition:
            <input
              maxLength={40}
              type="text"
              className="h-fit grow"
              name="definition"
              defaultValue={inputProps.definition}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      </div>
      <button className="btn btn-wide">Add card</button>
    </div>
  );
}

export default CreateCardForm;
