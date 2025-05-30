import { createContext } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0.8rem 0;
  padding: 1.6rem 2rem;

  background-color: var(--background-elevated-base);
  border-radius: 8px;
`;
const StyledHeader = styled.p`
  font-weight: 700;
`;

const StyledButton = styled.button`
  font-size: 1.4rem;
  font-weight: 700;
  background-color: transparent;
  border: 0px;
  border-radius: 9999px;
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

function Label({ children }) {
  return <p>{children}</p>;
}

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

Section.Header = Header;
Section.Label = Label;
Section.Button = Button;

export default Section;
