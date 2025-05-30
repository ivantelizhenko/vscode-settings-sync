import { ChangeEvent } from 'react';

const style = 'input text-[1.6rem] p-[1.6rem] w-full ';

function Input({
  className,
  onChange,
}: {
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Enter repo URL"
      className={style + ' ' + className}
      onChange={onChange}
    />
  );
}

export default Input;
