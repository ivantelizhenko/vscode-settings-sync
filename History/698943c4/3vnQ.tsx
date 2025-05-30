import { ReactNode } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
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
