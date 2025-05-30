import styled from "styled-components";

function Main() {
  return (
    <Wrapper>
      <Hero />
      <Cta />
      <Donate />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 24px 16px;
`;

export default Main;
