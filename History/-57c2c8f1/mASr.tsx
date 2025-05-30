import styled from 'styled-components';

const StyledSpinner = styled.span`
  .loader {
    width: 480px;
    height: 480px;
    border: 5px solid red;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return <StyledSpinner />;
}

export default Spinner;
