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

const Wrapper = styled.div``;
const StyledSpinner = styled(X)`
  animation: ${rotate} infinite 1s;
`;

export default Spinner;
