import { ReactNode } from 'react';

function ButtonGhost({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: (arg: 'mainSettings' | 'questions') => void;
}) {
  const style =
    'btn border-b-[hsla(213, 15%, 88%, 1)] flex w-full justify-start gap-[10px] border-t-0 border-r-0 border-l-0 bg-inherit text-[16px] leading-[1.5] text-[600] hover:bg-stone-100';

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonGhost;
