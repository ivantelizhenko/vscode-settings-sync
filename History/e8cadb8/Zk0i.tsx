import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: 'button';
  submit;
  reset;
}
function Button({ children, ...others }: ButtonProps) {
  return (
    <button className="btn" {...others}>
      {children}
    </button>
  );
}

export default Button;
