import { ReactNode } from 'react';

function Button({ children, ...others }: ButtonProps) {
  return (
    <button className="btn" {...others}>
      {children}
    </button>
  );
}

export default Button;
