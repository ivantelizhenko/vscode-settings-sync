import { ReactNode } from 'react';

function ButtonSm({
  children,
  selected = false,
}: {
  children: ReactNode;
  selected?: boolean;
}) {
  const button = ' btn btn-lg border-brand border-[2px] ';
  const style = selected ? +' bg-brand ' : ' hover:text-brand ';

  return <button className={button + style}>{children}</button>;
}

export default ButtonSm;
