import styled from 'styled-components';
import { useCats } from '../context/CatsContext';
import { usePage } from '../context/PageContext';
import Loading from './Loading';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  row-gap: 1.2rem;
`;

const ListItem = styled.li`
  font-size: 1.6rem;
`;

const Span = styled.span`
  font-weight: 700;
`;

function List() {
  const { cats } = useCats();
  const { page } = usePage();

  if (!cats.length) return <Loading />;

  const { meow1, meow2, meow3, meow4, meow5 } = cats[page].stats;

  return (
    <StyledList>
      <ListItem>
        Meow1: <Span>{meow1}</Span>
      </ListItem>
      <ListItem>
        Meow2: <Span>{meow2}</Span>
      </ListItem>
      <ListItem>
        Meow3: <Span>{meow3}</Span>
      </ListItem>
      <ListItem>
        Meow4: <Span>{meow4}</Span>
      </ListItem>
      <ListItem>
        Meow5: <Span>{meow5}</Span>
      </ListItem>
    </StyledList>
  );
}

export default List;
