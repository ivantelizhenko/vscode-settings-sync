import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;

  type?: 'button' | 'submit' | 'reset';
}
function Button({ ...others }) {
  return <button className="btn" {...others}></button>;
}

export default Button;
