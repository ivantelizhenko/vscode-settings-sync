import styled from 'styled-components';

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

const Col = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: #4b5563;
`;

const Email = styled.div`
  font-weight: 500;
`;

function UserRow({ user }) {
  const { user, username, userId, id } = user;

  return (
    <StyledRow>
      <div></div>
      <Col>User</Col>
      <Col>Username</Col>
      <Col>Email</Col>
      <Col>Phone</Col>
      <div></div>
    </StyledRow>
  );
}

export default UserRow;
