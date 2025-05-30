import styled from 'styled-components';

const StyledPagination = styled.div`
  /* background-color: purple; */
  padding: 1.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Pagination() {
  return <StyledPagination>Pagination</StyledPagination>;
}

export default Pagination;
