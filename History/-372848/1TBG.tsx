import styled, { keyframes } from "styled-components";
import X from "./X";

function Spinner() {
  return <Wrapper>Spinner</Wrapper>;
}

const rotate = keyframes`
    from{
    }
    to{
      transform: rotate(2turn)
    }

`;

const Wrapper = styled.div``;
const StyledSpinner = styled(X)``;

export default Spinner;
