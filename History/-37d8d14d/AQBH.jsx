import styled from "styled-components";

const Box = styled.div`
  background-color: #153b50;
`;

function Continer({ children }) {
  return <div>{children}</div>;
}

export default Continer;
