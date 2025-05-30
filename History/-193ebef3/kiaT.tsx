import { ReactNode } from 'react';

function ButtonBox({ children }: { children: ReactNode }) {
  return (
<div className="flex w-fit flex-col gap-[5px]">{children}</div>;
    <div className="flex w-fit gap-[10px] rounded-[8px] bg-white p-[32px]">
      {children}
    </div>
  );
}

export default ButtonBox;
