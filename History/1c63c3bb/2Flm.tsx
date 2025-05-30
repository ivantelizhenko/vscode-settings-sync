import { ChangeEvent } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

function InputOrTextarea({
  placeholder,
  id,
  type,
  inputOrTextarea,
  register,
  handleChange,
}: {
  placeholder: string;
  id?: string;
  type?: string;
  inputOrTextarea: 'input' | 'textarea';
  register: UseFormRegisterReturn;
  handleChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}) {
  const style =
    inputOrTextarea +
    ' border-gray inline-block w-full rounded-[4px] border border-solid';

  if (inputOrTextarea === 'textarea')
    return (
      <textarea
        required
        {...register}
        placeholder={placeholder}
        id={id}
        className={style}
        onChange={handleChange}
      />
    );

  if (inputOrTextarea === 'input')
    return (
      <input
        {...register}
        required
        placeholder={placeholder}
        id={id}
        type={type}
        className={style}
        onChange={handleChange}
      />
    );
}

export default InputOrTextarea;
