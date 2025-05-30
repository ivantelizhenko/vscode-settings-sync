import { useForm, UseFormRegisterReturn } from 'react-hook-form';

function InputOrTextarea({
  placeholder,
  id,
  type,
  inputOrTextarea,
  // register,
}: {
  placeholder: string;
  id: string;
  type?: string;
  inputOrTextarea: 'input' | 'textarea';
  // register: UseFormRegisterReturn;
}) {
  const { register } = useForm();

  const style =
    inputOrTextarea +
    ' border-gray inline-block w-full rounded-[4px] border border-solid';

  if (inputOrTextarea === 'textarea')
    return (
      <textarea
        required
        {...register(id)}
        placeholder={placeholder}
        id={id}
        className={style}
      />
    );

  if (inputOrTextarea === 'input')
    return (
      <input
        {...register(id)}
        required
        placeholder={placeholder}
        id={id}
        type={type}
        className={style}
      />
    );
}

export default InputOrTextarea;
