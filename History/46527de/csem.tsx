import { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import styled from 'styled-components';
import { type RowType } from './Chess';

type RowProps = { name: RowType['name']; children: ReactNode };

function Row({ name, children }: RowProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: name,
  });
  const style = {
    backgroundColor: isOver ? 'green' : undefined,
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
