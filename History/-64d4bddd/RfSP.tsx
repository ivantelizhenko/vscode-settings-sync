import { useParams } from 'react-router';
import styled from 'styled-components';

const StyledPage = styled.div`
  background-color: #fff;
  margin: 20px;
  height: 100%;
  width: 100%;
`;

function Page() {
  const { userId } = useParams();

  return <StyledPage>{userId}</StyledPage>;
}

export default Page;
