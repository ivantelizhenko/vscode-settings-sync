import styled,  from "styled-components";


function Spinner() {
  return (
    <Wrapper>
      <StyledSpinner />
    </Wrapper>
  );
}

const StyledSpinner = styled.div`
  width: 10%;

  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;

export default Spinner;
