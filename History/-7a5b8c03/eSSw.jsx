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
    <Section>
      <Section heading="Heading 1">paragraph 1</Section>
      <Section />
    </Section>
  );
}

export default Sections;
