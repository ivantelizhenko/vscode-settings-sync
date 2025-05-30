import { ReactNode } from 'react';

function Button({ children, ...others }: { children: ReactNode }) {
  return (
    <button className="btn" {...others}>
      {children}
    </button>
  );
}

export default Button;
