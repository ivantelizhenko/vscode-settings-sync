import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type ContainerProps<T extends ElementType> = {
  as: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as: Component,
  children,
}: ContainerProps<C>) {
const X<typeof Component> = Component

  return <Component<Component Component>>{children}</Component>;
}

export default Container;
