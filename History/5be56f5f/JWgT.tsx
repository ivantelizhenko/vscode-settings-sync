import { ReactNode } from 'react';

function Box({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-[20px] p-[32px]"></div>;
}

export default Box;
