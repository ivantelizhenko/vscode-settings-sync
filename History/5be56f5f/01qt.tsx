import { ReactNode } from 'react';

function Box({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-fit flex-col gap-[20px] bg-[--color-white] p-[32px]">
      {children}
    </div>
  );
}

export default Box;
