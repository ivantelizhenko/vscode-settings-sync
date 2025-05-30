type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as: Tag }: HeadingProps) {
  let style: string = className;

  if (Tag === 'h2') style += 'bg-red-500';

  return <Tag className={`${style} `}>{children}</Tag>;
}

export default Heading;
