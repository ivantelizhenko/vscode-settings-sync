import { ReactNode } from 'react';

interface InfoBoxProps {
  children: ReactNode;
}

function InfoBox({ children }: InfoBoxProps) {
  return (
    <aside>
      <p>War</p>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
