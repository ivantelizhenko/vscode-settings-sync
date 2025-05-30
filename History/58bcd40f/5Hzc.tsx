import styled from 'styled-components';
import { Button } from './Button';
import { PropsWithChildren } from 'react';

type ButtonIconProps = PropsWithChildren<{ width: string }>;

const StyledButtonIcon = styled(Button)`
  svg {
    width: 2rem;
    height: 2rem;
  }
`;

function ButtonIcon({ width, children }: ButtonIconProps) {
  return <StyledButtonIcon width={width}>{children}</StyledButtonIcon>;
}

export default ButtonIcon;
