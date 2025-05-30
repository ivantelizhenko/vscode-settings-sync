import styled from "styled-components";

function X() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x-icon lucide-x"
    >
      <path d="M0 0 L24 24" />
      <path d="M24 0 L0 24" />
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--color-x);
`;

export default X;
