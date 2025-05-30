import { ReactNode } from "react";

interface AppContainerProps {
  children: ReactNode;
}

function AppContainer({ children }: AppContainerProps) {
  return <div>{children}</div>;
}

export default AppContainer;
