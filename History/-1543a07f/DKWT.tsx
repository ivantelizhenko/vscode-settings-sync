import { ElementType, ReactNode } from 'react';

/**
 * @param as - any html element
 */
type ContainerProps = {
  as: ElementType;
  children?: ReactNode;
};

function Container({ as: Component }: ContainerProps) {
  return <Component>Hey</Component>;
}

export default Container;
