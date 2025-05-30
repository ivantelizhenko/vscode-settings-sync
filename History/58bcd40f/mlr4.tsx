import styled from 'styled-components';
import { Button } from './Button';
import { PropsWithChildren } from 'react';

type ButtonIconProps = PropsWithChildren<{ width: string; icon: SvgInHtml }>;

const StyledButtonIcon = styled(Button)`
  padding: 1.2rem;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function ButtonIcon({ width, icon }: ButtonIconProps) {
  return <StyledButtonIcon width={width}>{icon}</StyledButtonIcon>;
}

export default ButtonIcon;
