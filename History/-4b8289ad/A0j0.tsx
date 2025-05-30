import { ChangeEvent } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setRequestData } from '../store/ListSlice';

const style = 'input text-[1.6rem] p-[1.6rem] w-full ';

function Input({ className }: { className?: string }) {
  return (
    <input
      type="text"
      placeholder="Enter repo URL"
      className={style + ' ' + className}
      onChange={handleChange}
    />
  );
}

export default Input;
