import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

function ButtonGhost({ icon, children }: { children: ReactNode }) {
  return (
    <button className="btn border-b-[hsla(213, 15%, 88%, 1)] flex w-full justify-start gap-[10px] border-t-0 border-r-0 border-l-0 bg-inherit text-[16px] leading-[1.5] text-[600] hover:bg-stone-100">
      {children}
    </button>
  );
}

export default ButtonGhost;
