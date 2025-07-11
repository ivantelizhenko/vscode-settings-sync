import styled from 'styled-components';

const StyledSvg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  padding: 1.2rem;
`;

export default function TrashSvg() {
  return (
    <StyledSvg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V5H0V3H20V5H18ZM4 5V18H16V5H4ZM5 0H15V2H5V0Z"
        fill="#5E626B"
      />
    </StyledSvg>
  );
}
