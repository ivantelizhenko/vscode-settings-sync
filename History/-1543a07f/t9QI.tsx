import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  (as: Component2 = 'div'),
  children,
}: ContainerProps<C>) {
  const Component = as || 'div';

  return <Component>{children}</Component>;
}

export default Container;
