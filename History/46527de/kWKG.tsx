import { useDroppable } from '@dnd-kit/core';
import styled from 'styled-components';
import { BoardType } from './Chess';

function Row({ name, children }: { name: BoardType['name'] }) {
  const { isOver, setNodeRef } = useDroppable({
    id: name,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <Wrapper ref={setNodeRef} style={style}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default Row;
