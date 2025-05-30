import styled from 'styled-components';

const StyledSections = styled.div`
  height: auto;
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
