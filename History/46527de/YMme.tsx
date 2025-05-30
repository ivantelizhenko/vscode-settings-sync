import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import styled from 'styled-components';

function Droppable(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <Row ref={setNodeRef} style={style}>
      {props.children}
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  width: 100%;
`;
