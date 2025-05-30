import { ReactNode } from 'react';

const style = 'button cursor-pointer border border-[#ccc] rounded-md';

function Button({
  className,
  children,
  onClick,
  type = 'button',
}: {
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
}) {
  return (
    <button onClick={onClick} className={style + ' ' + className} type={type}>
      {children}
    </button>
  );
}

export default Button;
