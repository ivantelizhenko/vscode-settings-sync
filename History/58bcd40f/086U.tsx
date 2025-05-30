import styled from 'styled-components';
import { Button } from './Button';
import { PropsWithChildren } from 'react';

type ButtonIconProps = PropsWithChildren<{ width: string }>;

const StyledButtonIcon = styled(Button)``;

function ButtonIcon({ width, children }: ButtonIconProps) {
  return <StyledButtonIcon width={width}>{children}</StyledButtonIcon>;
}

export default ButtonIcon;
