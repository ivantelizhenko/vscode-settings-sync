import { ElementType, ReactNode } from 'react';

/**
 * @param as - any html element
 */
type ContainerProps = {
  as: ElementType;
  children?: ReactNode;
};

function ComponentName({ as: AnyUppercaseName }: ContainerProps) {
  return <AnyUppercaseName>{/* Something  */}</AnyUppercaseName>;
}

function App1() {
  return <ComponentName as="h2">Here will be text with h2</ComponentName>;
}

function App2() {
  return <ComponentName as="p">Here will be text with p</ComponentName>;
}

export { App1, App2 };
