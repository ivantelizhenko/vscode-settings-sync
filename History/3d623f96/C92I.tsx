import { ReactNode } from 'react';

function Heading({ as, children }: { as: string; children: ReactNode }) {
  if (as === 'h2')
    return (
      <h2 className="text-[24px] leading-[1.5] font-semibold">{children}</h2>
    );
  if (as === 'h4')
    return (
      <h2 className="text-[16px] leading-[1.5] font-semibold">{children}</h2>
    );
}

export default Heading;
