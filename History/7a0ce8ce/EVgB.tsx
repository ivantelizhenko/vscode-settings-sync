import { ReactNode } from 'react';

function ButtonSm({
  children,
  selected,
}: {
  children: ReactNode;
  selected: boolean;
}) {
  return (
    <button className="btn btn-lg border-brand hover:text-brand border-[2px] border-solid">
      {children}
    </button>
  );
}

export default ButtonSm;
