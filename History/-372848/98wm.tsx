import styled, { keyframes } from "styled-components";
import X from "./X";

function Spinner() {
  return (
    <Wrapper>
      <StyledSpinner />
    </Wrapper>
  );
}

const rotate = keyframes`
    from{
    }
    to{
      transform: rotate(2turn)
    }

`;

const Wrapper = styled.div`
  animation: ${rotate} infinite 1s linear;
`;
const StyledSpinner = styled(X)``;

export default Spinner;
