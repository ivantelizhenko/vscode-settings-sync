import { ElementType, ReactNode } from 'react';

type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

function Container({ as: Component, children }: ContainerProps) {
  return <Component>{children}</Component>;
}

export default Container;
