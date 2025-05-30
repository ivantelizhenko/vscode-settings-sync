type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as }: HeadingProps) {
  if (as === 'h2') return <h2 className={` ${className}`}>{children}</h2>;
}

export default Heading;
