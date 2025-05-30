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
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  position: relative;
  -webkit-box-flex: 1 !important;
  border: none;
  -ms-flex: auto !important;
  flex: auto !important;
  height: auto;
  margin: 0;
  min-width: 0;
  padding: 0;
  width: 100%;
  z-index: 0;
  overflow-y: scroll !important;
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
