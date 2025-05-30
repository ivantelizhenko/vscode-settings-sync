import { ReactNode } from 'react';

const style = 'button cursor-pointer border border-[#ccc] rounded-md';

function Button({
  className,
  children,
  onClick = e => {},
}: {
  className?: string;
  children: ReactNode;
  onClick: (e: MouseEvent) => void;
}) {
  return (
    <button onClick={onClick} className={style + ' ' + className}>
      {children}
    </button>
  );
}

export default Button;
