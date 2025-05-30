import { ReactNode } from 'react';

const style = 'button cursor-pointer border border-[#ccc] rounded-md';

function Button({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <button className={style + ' ' + className}>Button</button>;
}

export default Button;
