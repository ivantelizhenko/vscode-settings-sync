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
    <StyledSections>
      <Section>
        <Section.TextContainer>
          <Section.Header>Heading 1</Section.Header>
          <Section.Label>text 1</Section.Label>
        </Section.TextContainer>
        <Section.Button>Створити плейліст</Section.Button>
      </Section>
      <Section>
        <Section.TextContainer>
          <Section.Header>Heading 2</Section.Header>
          <Section.Label>text 2</Section.Label>
        </Section.TextContainer>
        <Section.Button>Огляд подкастів</Section.Button>
      </Section>
    </StyledSections>
  );
}

export default Sections;
