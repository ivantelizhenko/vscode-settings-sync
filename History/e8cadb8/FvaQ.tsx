import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;

  type?: 'button' | 'submit' | 'reset';
}
function Button({ children, ...others }: ButtonProps) {
  return (
    <button className="btn" {...others}>
      {children}
    </button>
  );
}

export default Button;
