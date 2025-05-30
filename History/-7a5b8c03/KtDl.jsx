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

function Section({ heading }) {
  return (
    <StyledSection>
      <h1>{heading}</h1>
      <p>text</p>
      <button>button</button>
    </StyledSection>
  );
}

function Sections() {
  return (
    <StyledSections>
      <Section heading="Heading 1" />
      <Section />
    </StyledSections>
  );
}

export default Sections;
