import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<>;

function Container({ as: Component, children }: ContainerProps) {
  return <Component>{children}</Component>;
}

export default Container;
