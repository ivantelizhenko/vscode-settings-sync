import styled from 'styled-components';
import ListItem from './ListItem';

const arr = [1, 2, 3, 4, 5];

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function List() {
  return (
    <StyledList>
      {arr.map(item => (
        <ListItem key={item} />
      ))}
    </StyledList>
  );
}

export default List;
