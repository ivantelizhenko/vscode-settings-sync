import styled from 'styled-components';

const StyledListItem = styled.li``;

function ListItem() {
  let i = 0;
  console.log(i++);
  return <StyledListItem>Item</StyledListItem>;
}

export default ListItem;
