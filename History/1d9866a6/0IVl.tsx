import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
  className?: string;
}

function AppContainer({ children, className }: AppContainerProps) {
  style = "" + " " + className;

  return <div className="">{children}</div>;
}

export default AppContainer;
