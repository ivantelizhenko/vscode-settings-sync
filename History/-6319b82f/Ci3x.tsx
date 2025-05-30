import { useDrag, useDrop } from 'react-dnd';
import { useAppSelector } from '../store/hooks';
import { AreaType } from '../store/ListSlice';

import Issue from './Issue';
import { ItemTypes } from '../utils/constants';
import { useEffect } from 'react';

const style =
  'flex flex-col gap-[2.4rem] p-[2.4rem] border border-[#333] bg-stone-200 items-center overflow-scroll ';

function Area({ className, type }: { className?: string; type: AreaType }) {
  const data = useAppSelector(store => store.list);
  const curList = data[`list${type}`];

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.ToDo || ItemTypes.InProgress || ItemTypes.ToDo,
      drop: () => console.log('drop'),
      collect: monitor => ({
        test: monitor,
      }),
    }),
    []
  );

  const [{ item }, drag] = useDrag(() => ({
    type: ItemTypes[type],
    item: { type },
    collect: monitor => ({
      item: monitor.getItem(),
    }),
  }));

  const itemMemo = useMemo(() => item, [item]);

  useEffect(() => {
    console.log(itemMemo);
  }, [itemMemo]);

  // useEffect(() => {
  //   console.log(test);
  // }, [test]);

  return (
    <div
      className={style + ' ' + className}
      ref={drop as unknown as React.RefCallback<HTMLDivElement>}
    >
      {curList?.map(issue => (
        <Issue
          key={issue.id}
          data={issue}
          type={type}
          ref={drag as unknown as React.RefCallback<HTMLDivElement>}
        />
      ))}
    </div>
  );
}

export default Area;
