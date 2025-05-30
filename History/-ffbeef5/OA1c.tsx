type HeadingProps = {
  children: string;
  className?: string;
};

function Heading({ children, className }: HeadingProps) {
  return (
    <div as={as} className={` ${className}`}>
      {children}
    </div>
  );
}

export default Heading;
