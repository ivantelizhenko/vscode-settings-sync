import { FormHTMLAttributes } from 'react';
import { ContainerProps } from '../../types/types';

interface FormContainerProps extends FormHTMLAttributes<HTMLFormElement> {}

function Form({ children }: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={`w-fit py-[2.4rem] px-[4.8rem]  bg-blue-200 flex flex-col gap-[1.2rem] items-center justify-center translate-y-[-8rem] ${className}`}
    >
      {children}
    </form>
  );
}

export default Form;
