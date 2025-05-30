import { ReactNode } from 'react';

function Heading({ as, children }: { as: string; children: ReactNode }) {
  let curClass: string;

  const h2 = 'font-semibold text-[24px] line leading-[1.5]';

  if (as === 'h2') curClass = h2;

  return <div className={curClass}></div>;
}

export default Heading;
