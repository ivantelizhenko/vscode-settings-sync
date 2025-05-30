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
  setAnswer,
}: {
  register: UseFormRegisterReturn;
  children: string;
  inputOrTextarea: 'input' | 'textarea';
  heading?: string;
  className?: string;
  setAnswer?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const [checked, setChecked] = useState<boolean>(false);
  const { correctAnswers } = useAppSelector(store => store.createTask);

  function handleSetAnswer(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (setAnswer) {
      setAnswer(e.target.value);
      // setChecked(correctAnswers.includes(e.target.value));
      // console.log(correctAnsweers);
      // console.log(!correctAnswers.includes(e.target.value));
      console.log(typeof e.target.value);
    }
  }

  return (
    <div className={`flex w-full flex-col gap-[5px] ${className}`}>
      {
        <label htmlFor={heading} className="flex justify-between">
          <Heading as="h4">{_.upperFirst(heading)}</Heading>
          {setAnswer && (
            <input type="checkbox" className="checkbox" value={heading} />
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
