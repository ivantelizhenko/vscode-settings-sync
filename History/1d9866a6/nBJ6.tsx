import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode;
  className?: string;
}

function AppContainer({ children, className }: AppContainerProps) {
  const style = '' + ' ' + className;

  return <div className={style}>{children}</div>;
}

export default AppContainer;
