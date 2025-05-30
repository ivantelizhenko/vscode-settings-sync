import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  type?: 'button' | 'submit' | 'reset';
}
function Button({ className, children, ...others }: ButtonProps) {
  return (
    <button
      className="px-[2.4rem] py-[1.2rem] border border-solid border-gray-400 className"
      {...others}
    >
      {children}
    </button>
  );
}

export default Button;
