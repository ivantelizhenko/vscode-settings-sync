import styled from 'styled-components';

function Spinner() {
  console.log('hey');
  return <Wrapper />;
}

const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
`;

export default Spinner;
