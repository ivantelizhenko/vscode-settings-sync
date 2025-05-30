import styled from "styled-components";

function Spacer({ size, style }) {
  return <Space style={{ "--height": size + "px", ...style }}></Space>;
}

const Space = styled.div`
  height: var(--height);
  width: 100%;
  background-color: transparent;
`;

export default Spacer;
