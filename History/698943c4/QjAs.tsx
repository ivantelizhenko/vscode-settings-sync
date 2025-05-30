import { ReactNode } from 'react';

interface InfoBoxProps {
  mode: 'hint' | 'warning';
  children: ReactNode;
}

function InfoBox({ mode, children }: InfoBoxProps) {
  return (
    <aside
      className={`infobox infobox-${mode === 'warning' ? 'warning' : 'hint'}`}
    >
      {mode === 'warning' && <h2>Warning</h2>}
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
