import styled from "styled-components";

function O() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-icon lucide-circle"
    >
      <circle cx="12" cy="12" r="10" />
    </Svg>
  );
}

const Svg = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--color-x);
`;

export default O;
