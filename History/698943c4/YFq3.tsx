import { ReactNode } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
  severity: 'low' | 'medium' | 'hard';
  children: ReactNode;
}

function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === 'hint')
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  if (mode === 'warning')
    return (
      <aside className="infobox infobox-warning warning--medium">
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
}

export default InfoBox;
