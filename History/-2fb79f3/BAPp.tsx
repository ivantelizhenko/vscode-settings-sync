import styled from 'styled-components';

import Heading from './Heading';
import Button from './Button';

const StyledPageNotFound = styled.div`
  padding: 6rem 8rem;
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Heading as="h1">Page not found</Heading>
      <Button $type="button-20rem">Go to Users page</Button>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
