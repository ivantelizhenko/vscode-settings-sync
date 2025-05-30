import InputOrTextarea from './InputOrTextarea';
import Heading from './Heading';
import { UseFormRegisterReturn } from 'react-hook-form';
import _ from 'lodash';
import { ChangeEvent, useState } from 'react';
import { useAppSelector } from '@/app/store/hooks';

function InputBox({
  register,
  children,
  inputOrTextarea,
  heading,
  className = '',
  toggleAnswer,
}: {
  register: UseFormRegisterReturn;
  children: string;
  inputOrTextarea: 'input' | 'textarea';
  heading?: string;
  className?: string;
  toggleAnswer?: (name: string) => void;
}) {
  const [curName, setCurName] = useState<boolean>(false);
  const { correctAnswers } = useAppSelector(store => store.createTask);

  function handleSetAnswer(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (toggleAnswer) {
      toggleAnswer(e.target.name);
    }
  }

  return (
    <div className={`flex w-full flex-col gap-[5px] ${className}`}>
      {
        <label htmlFor={heading} className="flex justify-between">
          <Heading as="h4">{_.upperFirst(heading)}</Heading>
          {toggleAnswer && (
            <input
              type="checkbox"
              className="checkbox"
              name={heading}
              onChange={handleSetAnswer}
            />
          )}
        </label>
      }
      <InputOrTextarea
        id={heading}
        type="text"
        inputOrTextarea={inputOrTextarea}
        placeholder={children}
        register={register}
      />
    </div>
  );
}

export default InputBox;
