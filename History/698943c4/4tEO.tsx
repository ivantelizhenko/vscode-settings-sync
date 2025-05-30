import { ReactNode } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
  children: ReactNode;
}

function InfoBox({ mode, children }: InfoBoxProps) {
  if (mode === 'hint')
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
}

export default InfoBox;
