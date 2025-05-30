import { ReactNode } from 'react';

function ButtonSmall({
  children,
  selected = false,
  onClick,
}: {
  children: ReactNode;
  selected?: boolean;
  onClick?: () => void;
}) {
  const button = ' btn border-brand border-[2px]  ';
  const selectedOrNot = selected
    ? ' bg-brand text-white'
    : ' hover:text-brand ';

  const style = button + selectedOrNot;

  return (
    <button className={button + style} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonSmall;
