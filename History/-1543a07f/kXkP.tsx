import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as: Component2 = 'div',
  children: rename = 'hey',
}: ContainerProps<C>) {
  const Component = as || 'div';

  return <Component>{rename}</Component>;
}

export default Container;
