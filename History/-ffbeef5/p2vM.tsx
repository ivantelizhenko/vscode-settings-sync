type HeadingProps = {
  children: string;
  className?: string;
  as: 'h3';
};

function Heading({ children, className }: HeadingProps) {
  return (
    <div as={as} className={` ${className}`}>
      {children}
    </div>
  );
}

export default Heading;
