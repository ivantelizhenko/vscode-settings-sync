import styled from 'styled-components';

import Heading from './Heading';
import Button from './Button';
import { useNavigate } from 'react-router';

const StyledPageNotFound = styled.div`
  padding: 6rem 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <StyledPageNotFound>
      <Heading as="h1">Page not found</Heading>
      <Button $type="button-20rem">Go to Users page</Button>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
