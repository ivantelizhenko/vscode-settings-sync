import { ReactNode } from 'react';

function Box({ children }: { children: ReactNode }) {
  return (
    <div className="max-w flex flex-col gap-[20px] p-[32px]">{children}</div>
  );
}

export default Box;
