import { ReactNode } from 'react';

type LinkProps = {
  className?: string;
  url: string;
  children: ReactNode;
};

const style = '';

function Link({ className, children, url }: LinkProps) {
  return (
    <a href={url} target="_blank" className={style + ' ' + className}>
      {children}
    </a>
  );
}

export default Link;
