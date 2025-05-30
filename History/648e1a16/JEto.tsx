import styled from 'styled-components';
import Heading from '../components/headings/Heading';
import ButtonLink from '../components/buttons/ButtonLink';
import { Link } from 'react-router';

const StyledPageNotFound = styled.div``;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Heading as="h1">Page not found</Heading>
      <Link to="/app/users">Go to Users page</Link>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
