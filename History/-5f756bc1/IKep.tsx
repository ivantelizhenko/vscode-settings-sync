import { ReactNode } from 'react';
import { useAppSelector } from '../store/hooks';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
};

const style = 'button cursor-pointer border border-[#ccc] rounded-md';

function Button({
  className,
  children,
  onClick,
  type = 'button',
}: ButtonProps) {
  const { isLoading } = useAppSelector(store => store.board);
  return (
    <button
      onClick={onClick}
      className={style + ' ' + className}
      type={type}
      disabled={isLoading}
    >
      {children}
    </button>
  );
}

export default Button;
