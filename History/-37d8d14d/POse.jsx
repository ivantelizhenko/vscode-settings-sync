import styled from "styled-components";

const Box = styled.div`
  background-color: #153b50;
  color: #f9f9f9;
  height: 100vh;
  padding: 9.6rem;
`;

function Continer({ children }) {
  return <Box>{children}</Box>;
}

export default Continer;
