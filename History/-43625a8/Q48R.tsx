import { ReactNode } from 'react';
import styled from 'styled-components';

function Time({ children, type }: { children: ReactNode; type: 'w' | 'b' }) {
  const Component = times[type];

  return <Component>{children}</Component>;
}

const TimeStyled = styled.div`
  padding: 12px 16px;
  width: fit-content;
  height: fit-content;
  border-radius: 3px;
  font-weight: 600;
  font-size: 1.5rem;
`;

const TimeBlack = styled(TimeStyled)`
  background-color: var(--color-gray-900);
  color: var(--color-gray-400);
  grid-area: timeBlack;
`;
const TimeWhite = styled(Time)`
  color: var(--color-gray-900);
  background-color: var(--color-gray-400);
  grid-area: timeWhite;
`;

const style = { w: { color: 'var(--color-gray-900)' } };

const times = { w: TimeWhite, b: TimeBlack };

export default Time;
