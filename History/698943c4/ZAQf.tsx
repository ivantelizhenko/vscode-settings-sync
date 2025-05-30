import { ReactNode } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
  children: ReactNode;
}

function InfoBox({ mode, children }: InfoBoxProps) {
  return (
    <aside>
      {mode === 'warning' && <p>Warning</p>}
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
