import styled from "styled-components";
import Section from "./Section";

const StyledSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  height: 100%;

  padding: 0 0.8rem 0.8rem;
  overflow-y: scroll;
  overflow-x: hidden;

  //temporary
  min-height: 6.9rem;
`;

function Sections() {
  return (
    <StyledSections>
      <Section>
        <Section.TextContainer>
          <Section.Header>Create your first playlist</Section.Header>
          <Section.Label>It's easy, we'll help you</Section.Label>
        </Section.TextContainer>
        <Section.Button>Create playlist</Section.Button>
      </Section>
      <Section>
        <Section.TextContainer>
          <Section.Header>Let's find some podcasts to follow</Section.Header>
          <Section.Label>We'll keep you update on new episodes</Section.Label>
        </Section.TextContainer>
        <Section.Button>Browes podcasts</Section.Button>
      </Section>
    </StyledSections>
  );
}

export default Sections;
