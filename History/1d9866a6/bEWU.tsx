import { ReactNode } from 'react';

interface AppContainerProps {
  children: ReactNode;
  className?: string;
}

function AppContainer({ children, className }: AppContainerProps) {
  // const style = '' + ' ' + className;

  return (
    <div className="flex justify-center items-center h-full bg-green-200 ">
      {children}
    </div>
  );
}

export default AppContainer;
