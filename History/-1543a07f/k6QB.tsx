import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function Container({ as: Component }: ContainerProps) {
  return <Component>HEY</Component>;
}

export default Container;
