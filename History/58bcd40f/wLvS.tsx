import styled from 'styled-components';
import { Button } from './Button';

type ButtonIconProps = { width: string; icon: string };

const StyledButtonIcon = styled(Button)``;

function ButtonIcon({ width, icon }: ButtonIconProps) {
  return <StyledButtonIcon>ButtonIcon</StyledButtonIcon>;
}

export default ButtonIcon;
