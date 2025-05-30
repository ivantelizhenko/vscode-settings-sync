import styled from 'styled-components';
import { Button } from './Button';
import { PropsWithChildren } from 'react';

type ButtonIconProps = PropsWithChildren<{ width: string }>;

const StyledButtonIcon = styled(Button)`
  padding: 1.2rem;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function ButtonIcon({ width, children }: ButtonIconProps) {
  return <StyledButtonIcon width={width}>{children}</StyledButtonIcon>;
}

export default ButtonIcon;
