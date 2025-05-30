import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as = 'div',
  children,
}: ContainerProps<C>) {
  return <Component>{children}</Component>;
}

export default Container;
