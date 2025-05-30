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

const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledHeader = styled.p`
  font-weight: 700;
`;

const StyledLabel = styled.p`
  font-size: 1.4rem;
`;

const StyledButton = styled.button`
  align-self: flex-start;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-black);
  border: 0px;
  border-radius: 9999px;
  padding: 0.4rem 1.6rem;

  transition: all 0.2s;

  &:hover {
    transform: scale(110%);
    background-color: var(--text-subdued);
  }
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

function TextContainer({ children }) {
  return <StyledTextContainer>{children}</StyledTextContainer>;
}

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}

function Button({ onClick, children }) {
  return (
    <StyledButton onClick={onClick}>
      <span>{children}</span>
    </StyledButton>
  );
}

Section.TextContainer = TextContainer;
Section.Header = Header;
Section.Label = Label;
Section.Button = Button;

export default Section;
