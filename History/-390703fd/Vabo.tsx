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
      className={`h-fit rounded-[8px] bg-(--color-white) p-[32px] ${className}`}
    >
      {children}
    </div>
  );
}

export default SelectBox;
