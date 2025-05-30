import styled from 'styled-components';

const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 6.9rem;
  /* height: 2rem; */
  padding: 0 0.8rem 0.8rem;
  overflow-y: scroll;
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
