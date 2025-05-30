import { useDroppable } from '@dnd-kit/core';
import styled from 'styled-components';
import { BoardType } from './Chess';

function Row({ name }: { name: BoardType['name'] }) {
  const { isOver, setNodeRef } = useDroppable({
    id: name,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <Wrapper ref={setNodeRef} style={style}>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default Row;
