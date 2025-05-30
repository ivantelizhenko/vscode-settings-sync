import { ReactNode } from 'react';

function SelectBox({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex h-fit w-full justify-between gap-[20px] rounded-[8px] bg-(--color-white) ${className}`}
    >
      {children}
    </div>
  );
}

export default SelectBox;
