function Heading({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <div className={` ${className}`}>{children}</div>;
}

export default Heading;
