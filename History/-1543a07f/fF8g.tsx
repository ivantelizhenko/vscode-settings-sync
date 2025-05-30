import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function Container({ as }: ContainerProps) {
  return <div as={as}></div>;
}

export default Container;
