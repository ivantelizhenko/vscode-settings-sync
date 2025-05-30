import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function ComponentName({ as: AnyUppercaseName }: ContainerProps) {
  return <AnyUppercaseName>{/* Something  */}</AnyUppercaseName>;
}

export default ComponentName;

function App() {
  return <ComponentName as="h2">Here will be text with h2</ComponentName>;
}
