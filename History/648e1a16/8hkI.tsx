import styled from 'styled-components';
import Heading from '../components/headings/Heading';
import ButtonLink from '../components/buttons/ButtonLink';

const StyledPageNotFound = styled.div``;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <Heading as="h1">Page not found</Heading>
      <ButtonLink to="/app/users">Go to Users page</ButtonLink>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
