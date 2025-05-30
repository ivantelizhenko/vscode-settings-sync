import styled from 'styled-components';
import { Button } from './Button';
import { ReactNode } from 'react';

type ButtonIconProps = { width: string; padding: string; children: ReactNode };

const StyledButtonIcon = styled(Button)`
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function ButtonIcon({ width, padding, children }: ButtonIconProps) {
  return (
    <StyledButtonIcon width={width} padding={padding}>
      {children}
    </StyledButtonIcon>
  );
}

export default ButtonIcon;
