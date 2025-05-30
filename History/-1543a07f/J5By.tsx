import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as: ElementType;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container({ as: Component, children }: ContainerProps) {
  return <Component>{children}</Component>;
}

export default Container;
