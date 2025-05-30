import { ReactNode } from 'react';

function ButtonSm({
  children,
  selected,
}: {
  children: ReactNode;
  selected: boolean;
}) {
  const button = 'btn btn-lg border-brand border-[2px] ';
  const style = selected ? '' : '';

  return <button className="hover:text-brand">{children}</button>;
}

export default ButtonSm;
