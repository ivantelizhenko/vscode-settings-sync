import styled from "styled-components";

const Border = styled.div`
  --padding: ${(props) => props.$gap + "px"};

  border-left: 1px solid var(--color-gray-300);
  border-bottom: 1px solid var(--color-gray-300);

  padding: var(--padding) 0;
`;

export default Border;
