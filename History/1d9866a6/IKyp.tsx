import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode;
  className?: string;
}

function AppContainer({ children, className }: AppContainerProps) {
  return (
    <div
      className={`flex justify-center items-center h-full bg-green-200 ${className}`}
    >
      {children}
    </div>
  );
}

export default AppContainer;
