import { ReactNode } from 'react';

function Heading({
  as,
  children,
  className,
}: {
  as: string;
  children: ReactNode;
  className?: string;
}) {
  const heading = ' leading-[1.5] font-semibold ';

  if (as === 'h2')
    return <h2 className={heading + ' text-[24px]' + className}>{children}</h2>;
  if (as === 'h4')
    return (
      <h4 className={heading + ' text-[16px] text-[600]' + className}>
        {children}
      </h4>
    );
}

export default Heading;
