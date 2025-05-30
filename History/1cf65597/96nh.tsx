import styled from "styled-components";

function X() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x-icon lucide-x"
    >
      <path d="M2 2 L22 22" />
      <path d="M22 2 L2 22" />
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--color-x);
`;

export default X;
