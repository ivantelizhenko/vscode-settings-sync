import styled from 'styled-components';
import { Button } from './Button';
import { PropsWithChildren } from 'react';

type ButtonIconProps = PropsWithChildren<{ width: string }>;

const StyledButtonIcon = styled(Button)``;

function ButtonIcon({ width, icon }: ButtonIconProps) {
  return <StyledButtonIcon>ButtonIcon</StyledButtonIcon>;
}

export default ButtonIcon;
