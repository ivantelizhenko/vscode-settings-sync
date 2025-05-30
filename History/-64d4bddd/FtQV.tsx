import { useParams } from 'react-router';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: ;
`;

function Page() {
  const { userId } = useParams();

  return <StyledPage>{userId}</StyledPage>;
}

export default Page;
