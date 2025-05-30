import styled from 'styled-components';

const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: auto;
  min-height: 100%;
  padding: 0 0.8rem 0.8rem;
`;

function Section() {
  return (
    <section>
      <h1>Heading</h1>
      <p>text</p>
      <button>button</button>
    </section>
  );
}

function Sections() {
  return (
    <StyledSections>
      <Section />
      <Section />
    </StyledSections>
  );
}

export default Sections;
