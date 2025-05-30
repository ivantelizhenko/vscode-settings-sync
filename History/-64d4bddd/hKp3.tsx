import { useParams } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  overflow: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: auto;
`;

const StyledPage = styled.div`
  background-color: #fff;

  width: 100%;
`;

function Page() {
  const { userId } = useParams();

  return (
    <Wrapper>
      <StyledPage>{userId}</StyledPage>
    </Wrapper>
  );
}

export default Page;
