import { ContainerProps } from '../types/types';

function AppContainer({ children, className }: ContainerProps) {
  return (
    <div
      className={`flex flex-col gap-[2.4rem] justify-center  h-full bg-green-200  ${className}`}
    >
      {children}
    </div>
  );
}

export default AppContainer;
