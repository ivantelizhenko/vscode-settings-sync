import styled from 'styled-components';
import { Button } from './Button';
import { ReactNode } from 'react';

type ButtonIconProps = { width: string; padding: string; children: ReactNode };

const StyledButtonIcon = styled(Button)``;

function ButtonIcon({ width, padding, children }: ButtonIconProps) {
  return (
    <StyledButtonIcon width={width} padding={padding}>
      {children}
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
