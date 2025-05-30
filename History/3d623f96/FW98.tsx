import { ReactNode } from 'react';

function Heading({ as, children }: { as: string; children: ReactNode }) {
  const heading = '';

  if (as === 'h2')
    return (
      <h2 className={'text-[24px] leading-[1.5] font-semibold'}>{children}</h2>
    );
  if (as === 'h4')
    return <h4 className={heading + ' text-[16px]'}>{children}</h4>;
}

export default Heading;
