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
      transform: rotate(90deg)
    }

`;

const Wrapper = styled.div`
  animation: ${rotate} infinite 0.5s;
`;
const StyledSpinner = styled(X)``;

export default Spinner;
