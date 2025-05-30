import styled from 'styled-components';
import Section from './Section';

const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-height: 6.9rem;
  height: 10vh;
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
          <Section.Header>Створіть свій перший плейліст</Section.Header>
          <Section.Label>Це легко. Ми вам допоможемо.</Section.Label>
        </Section.TextContainer>
        <Section.Button>Створити плейліст</Section.Button>
      </Section>
      <Section>
        <Section.TextContainer>
          <Section.Header>
            Підберемо кілька подкастів, на які можна підписатися
          </Section.Header>
          <Section.Label>Ми будемо повідомляти про нові епізоди</Section.Label>
        </Section.TextContainer>
        <Section.Button>Огляд подкастів</Section.Button>
      </Section>
    </StyledSections>
  );
}

export default Sections;
