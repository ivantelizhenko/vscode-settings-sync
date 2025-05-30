import styled, { keyframes } from "styled-components";
import X from "./X";

function Spinner() {
  return (
    <Wrapper>
      <X />
    </Wrapper>
  );
}

const rotate = keyframes`
    from{
    }
    to{
      transform: rotate(1turn)
    }

`;

const Wrapper = styled.div`
  width: 10%;
  place-self: center;
  animation: ${rotate} infinite 1s linear;
`;

export default Spinner;
