import styled from 'styled-components';

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr auto;
  column-gap: 2.4rem;
  align-items: start;
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

function UserRow({
  userData,
}: {
  userData: { name: string; username: string; phone: string; email: string };
}) {
  const { name, username, phone, email } = userData;

  return (
    <StyledRow>
      <div></div>
      <Col>{name}</Col>
      <Col>{username}</Col>
      <Col>{phone.split(' ')[0].replace('-', '')}</Col>
      <Col>{email}</Col>
      <div></div>
    </StyledRow>
  );
}

export default UserRow;
