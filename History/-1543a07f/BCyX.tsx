import { ElementType, ReactNode } from 'react';

type ContainerProps = {
  as: ElementType;
  children?: ReactNode;
};

function ComponentName({ as: AnyUppercaseName }: ContainerProps) {
  return <AnyUppercaseName>{/* Something  */}</AnyUppercaseName>;
}

function App() {
  return <ComponentName as="h2">Here will be text with h2</ComponentName>;
}

export default App;
