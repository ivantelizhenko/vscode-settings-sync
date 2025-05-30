import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type HeadingProps = PropsWithChildren<{ as: string }>;

const StyledHeading = styled.h2`
  display: flex;

  align-items: center;
  text-transform: uppercase;
  line-height: 3.2rem;

  ${props =>
    props.as === 'h2' &&
    css`
      font-weight: 400;
      font-size: 2.4rem;
      letter-spacing: 0.6rem;
      justify-content: center;
    `}

  ${props =>
    props.as === 'h3' &&
    css`
      font-weight: 400;
      font-size: 2rem;

      letter-spacing: 0.6rem;
      justify-content: start;
    `}
`;

function Heading({ children, as }: HeadingProps) {
  return <StyledHeading as={as}>{children}</StyledHeading>;
}

export default Heading;
