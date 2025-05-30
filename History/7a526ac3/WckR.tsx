'use client';

import { CardType } from '@/app/AddNewQuest';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';



function CreateCardForm({ addCard }: { addCard: (card: CardType) => void }) {
  const { register, handleSubmit } = useForm<CardType>();
  
  const [inputProps, setInputProps] = useState<CardType>({
    id: Math.random().toString(),
    term: '',
    definition: '',
  });


    const onSubmit: SubmitHandler<Inputs> = data =>
      console.log({ id: Math.random() + useId(), ...data, cards });



  function handleAddCard() {
    if (inputProps.term === '' && inputProps.definition === '') return;
    addCard(inputProps);
    setInputProps({ id: Math.random().toString(), term: '', definition: '' });
  }

  return (
    <form className="mb-4 flex flex-col gap-8 rounded-xl bg-secondary-content p-8" onSubmit={handleSubmit(handleAddCard)}>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card grid flex-grow place-items-center rounded-box">
          <label className="input input-bordered flex w-full items-center gap-2">
            Term:
            <input
              maxLength={40}
              type="text"
              className="grow"
              {...register('term')}
              value={inputProps.term}
              required
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
              {...register('definition')}
              value={inputProps.definition}
              required
            />
          </label>
        </div>
      </div>
      <button className="btn btn-wide" >
        Add card
      </button>
    </а>
  );
}

export default CreateCardForm;
