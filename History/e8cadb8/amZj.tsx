import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;

  type?: 'button' | 'submit' | 'reset';
}
function Button({ children, type = 'button', ...others }: ButtonProps) {
  return (
    <button className="btn" type={type} {...others}>
      {children}
    </button>
  );
}

export default Button;
