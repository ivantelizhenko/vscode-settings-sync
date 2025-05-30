import styled from 'styled-components';
import ListItem from './ListItem';

const arr = [1, 2, 3, 4, 5];

const StyledList = styled.ul``;

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
