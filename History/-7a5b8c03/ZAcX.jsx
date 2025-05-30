import styled from 'styled-components';
import Section from './Section';

const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 8.8rem;
  /* height: 2rem; */
  padding: 0 0.8rem 0.8rem;
  overflow-y: scroll;
`;

// function Section({ heading, children, buttonText }) {
//   return (
//     <>
//       <h1>{heading}</h1>
//       <p>{children}</p>
//       <button>button 1</button>
//     </>
//   );
// }

function Sections() {
  return (
    <Sections>
      <Section>
        <Section.Header></Section.Header>
      </Section>
    </Sections>
  );
}

export default Sections;
