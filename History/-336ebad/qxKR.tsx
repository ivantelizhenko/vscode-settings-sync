import styled from 'styled-components';

const StyledLoader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #000;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loader() {
  return <StyledLoader></StyledLoader>;
}

export default Loader;
