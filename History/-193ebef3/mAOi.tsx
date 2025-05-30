import { ReactNode } from 'react';

function ButtonBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-fit gap-[20px] rounded-[8px] bg-white p-[32px]">
      {children}
    </div>
  );
}

export default ButtonBox;
