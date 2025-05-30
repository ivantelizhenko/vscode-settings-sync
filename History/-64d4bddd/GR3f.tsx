import { useParams } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  overflow: auto;
  height: 100%;
`;

const StyledPage = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-right: auto;
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
