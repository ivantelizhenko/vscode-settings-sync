import { ReactNode } from 'react';

function Box({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-fit w-fit flex-col gap-[20px] rounded-[8px] bg-white p-[32px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
