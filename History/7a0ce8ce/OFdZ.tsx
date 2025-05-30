import { ReactNode } from 'react';

function ButtonSm({
  children,
  selected,
}: {
  children: ReactNode;
  selected: boolean;
}) {
  const button = ' btn btn-lg border-brand border-[2px] ';
  const style = button + selected ? +' bg-brand ' : ' hover:text-brand ';

  return <button className={style}>{children}</button>;
}

export default ButtonSm;
