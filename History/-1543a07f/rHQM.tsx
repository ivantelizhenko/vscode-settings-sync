import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function Container({ as: X }: ContainerProps) {
  return <X></X>;
}

export default Container;
