import { jsx } from 'react/jsx-runtime';

type HeadingProps = {
  children: string;
  className?: string;
  as: keyof jsx.IntrinsicElements;
};

function Heading({ children, className, as: Tag }: HeadingProps) {
  let style: string = '';

  if (Tag === 'h2') style = 'text-[2.4rem]';

  return <Tag className={`${style} ${className}`}>{children}</Tag>;
}

export default Heading;
