import { ReactNode } from 'react';

interface HintBoxProps {
  mode: 'hint';
  children: ReactNode;
}

interface WarningBoxProps {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
}

function InfoBox({ mode, severity, children }: HintBoxProps | WarningBoxProps) {
  if (mode === 'hint')
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );

  if (mode === 'warning')
    return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
        <h2>Warning</h2>
        <p>{children}</p>
      </aside>
    );
}

export default InfoBox;
