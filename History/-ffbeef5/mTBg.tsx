type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as: Tag }: HeadingProps) {
  let style: string = '';

  return <Tag className={`${style} ${className}`}>{children}</Tag>;
}

export default Heading;
