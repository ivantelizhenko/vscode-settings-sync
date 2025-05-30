import styled from 'styled-components';

const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 8.8rem;
  /* height: 2rem; */
  padding: 0 0.8rem 0.8rem;
  overflow-y: scroll;
`;

const StyledSection = styled.section``;

function Section({ heading, children, buttonText }) {
  return (
    <StyledSection>
      <h1>{heading}</h1>
      <p>{children}</p>
      <button>button 1</button>
    </StyledSection>
  );
}

function Sections() {
  return (
    <StyledSections>
      <Section heading="Heading 1">paragraph 1</Section>
      <Section />
    </StyledSections>
  );
}

export default Sections;
