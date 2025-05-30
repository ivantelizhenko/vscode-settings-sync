import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function ComponentName({ as: AnyUppercaseName }: ContainerProps) {
  return <AnyUppercaseName>{/* Something  */}</AnyUppercaseName>;
}

export default ComponentName;
