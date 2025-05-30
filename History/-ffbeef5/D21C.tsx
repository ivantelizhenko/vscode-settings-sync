type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as: Tag }: HeadingProps) {
  const style = ' ' + className;

  return <Tag className={`${style} `}>{children}</Tag>;
}

export default Heading;
