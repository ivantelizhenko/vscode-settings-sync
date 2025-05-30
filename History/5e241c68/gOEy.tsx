import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  UniqueIdentifier,
} from '@dnd-kit/core';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  rectSwappingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import { useState } from 'react';
import styled from 'styled-components';
import Droppable from './Droppable';
import Draggable from './Draggable';
import { useTabs } from '../store/TabsContext';
import { Tab } from '../store/TabsContextType';

const StyledPage = styled.div`
  padding: 6.4rem;
  background: pink;
  height: 100%;
  max-width: 100%;
`;

function Page() {
  const { tabs } = useTabs();
  const [items, setItems] = useState<Tab[]>(tabs);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10, // Мінімальна відстань в пікселях для активації перетягування
      },
    })
  );

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event: DragEndEvent) {
    console.log(event);
    const { active, over } = event;
    setActiveId(null);

    if (over && active.id !== over.id) {
      setItems(items => {
        const activeTab = items.find(item => item.id === active.id);
        const overTab = items.find(item => item.id === over.id);
        const oldIndex = items.indexOf(activeTab!);
        const newIndex = items.indexOf(overTab!);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <StyledPage>
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        modifiers={[restrictToHorizontalAxis]}
      >
        <SortableContext items={items} strategy={rectSwappingStrategy}>
          <Droppable>
            {items.map(tab => (
              <Draggable id={tab.id} key={tab.id}>
                {tab.title}
              </Draggable>
            ))}
          </Droppable>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <Draggable id={activeId} key={activeId}>
              {tabs.find(tab => tab.id === activeId)?.title}
            </Draggable>
          ) : null}
        </DragOverlay>
      </DndContext>
    </StyledPage>
  );
}

export default Page;
