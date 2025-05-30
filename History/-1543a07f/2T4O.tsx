import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function Container({ as: AnyUppercaseName }: ContainerProps) {
  return <AnyUppercaseName>{/* Something  */}</AnyUppercaseName>;
}

export default Container;
