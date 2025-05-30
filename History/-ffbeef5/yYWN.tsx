type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as }: HeadingProps) {
  return (
    <h1 as={as} className={` ${className}`}>
      {children}
    </h1>
  );
}

export default Heading;
