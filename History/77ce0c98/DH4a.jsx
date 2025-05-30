import { createContext } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  background-color: var(--background-elevated-base);
  border-radius: 8px;
`;
const StyledHeader = styled.p`
  font-weight: 700;
`;

const SectionContext = createContext();

function Section({ children }) {
  function handleClick() {}

  return (
    <SectionContext.Provider value={handleClick}>
      <StyledSection>{children}</StyledSection>
    </SectionContext.Provider>
  );
}

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
