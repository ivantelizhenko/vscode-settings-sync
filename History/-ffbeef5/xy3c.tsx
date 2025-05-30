type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as }: HeadingProps) {
  return (
    <div as={as} className={` ${className}`}>
      {children}
    </div>
  );
}

export default Heading;
