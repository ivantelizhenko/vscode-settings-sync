import { ReactNode } from 'react';

function Heading({ as, children }: { as: string; children: ReactNode }) {
  if (as === 'h2')
    return (
      <h2 className="line text-[24px] leading-[1.5] font-semibold">
        {children}
      </h2>
    );
}

export default Heading;
