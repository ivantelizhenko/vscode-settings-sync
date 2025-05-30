import styled from 'styled-components';

const StyledSections = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: auto;
  min-height: 100%;
  padding: 0 0.8rem 0.8rem;
   */

  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  top: 0px;
  right: auto;
  left: 0px;
  width: calc(100% + 0px);
  padding: 0px;
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
