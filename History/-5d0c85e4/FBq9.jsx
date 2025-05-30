import styled from "styled-components";

function Donate() {
  return (
    <Wrapper>
      <Navigation>
        <Circle $active={true}>1</Circle>
        <Line />
        <Circle $active={false}>2</Circle>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
`;
const Circle = styled.div``;
const Line = styled.div`
  height: 1px;
  background-color
`;

export default Donate;
