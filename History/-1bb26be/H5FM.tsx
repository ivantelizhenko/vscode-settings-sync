import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;
  letter-spacing: 0.6rem;
`;

function Heading() {
  return <StyledHeading>Heading</StyledHeading>;
}

export default Heading;
