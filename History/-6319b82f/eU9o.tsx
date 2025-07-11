import { useDrop } from 'react-dnd';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { AreaType, changeColumn } from '../store/BoardSlice';

import Issue from './Issue';
import { ItemTypes } from '../utils/constants';

const style =
  'flex flex-col gap-[2.4rem] p-[2.4rem] border border-[#333] bg-stone-200 items-center overflow-scroll ';

function Area({ className, type }: { className?: string; type: AreaType }) {
  const dispatch = useAppDispatch();
  const data = useAppSelector(store => store.board);
  const curList = data[`list${type}`];

  const [, drop] = useDrop(() => ({
    accept: Object.values(ItemTypes),
    drop: () => {
      console.log(type);
      dispatch(changeColumn(type));
    },
  }));

  return (
    <div
      className={style + ' ' + className}
      ref={drop as unknown as React.RefCallback<HTMLDivElement>}
    >
      {curList?.map(issue => (
        <Issue key={issue.id} data={issue} type={type} />
      ))}
    </div>
  );
}

export default Area;
