type HeadingProps = {
  children: string;
  className?: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

function Heading({ children, className, as }: HeadingProps) {
  const style = ' ' + className;

  if (as === 'h1') return <h1 className={`${style} `}>{children}</h1>;
  if (as === 'h2') return <h2 className={`${style} `}>{children}</h2>;
  if (as === 'h3') return <h3 className={`${style} `}>{children}</h3>;
  if (as === 'h4') return <h4 className={`${style} `}>{children}</h4>;
  if (as === 'h5') return <h5 className={`${style} `}>{children}</h5>;
}

export default Heading;
