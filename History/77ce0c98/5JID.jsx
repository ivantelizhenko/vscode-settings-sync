import { createContext } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.p`
  font-weight: 700;
`;

const SectionContext = createContext();

function Section({ children }) {
  function handleClick() {}

  return (
    <SectionContext.Provider value={handleClick}>
      {children}
    </SectionContext.Provider>
  );
}

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
