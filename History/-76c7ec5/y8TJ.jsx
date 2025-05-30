import styled from "styled-components";

const Border = styled.div`
  --padding: ${(props) => props.$gap + "px"};

  border-left: 1px solid var(--color-gray-300);

  padding-bottom: var(--padding);
`;

export default Border;
