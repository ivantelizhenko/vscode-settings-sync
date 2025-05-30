import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as: Component,
  children,
}: ContainerProps<C>) {
  return <Component<Component>>{children}</Component>;
}

export default Container;
