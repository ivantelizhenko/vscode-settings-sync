import { ReactNode } from 'react';

const style = 'button cursor-pointer border border-[#ccc] rounded-md';

function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <button className={style + ' ' + className}>{children}</button>;
}

export default Button;
