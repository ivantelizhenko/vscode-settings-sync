import { HiOutlineTrash } from 'react-icons/hi2';
import Box from './Box';
import ButtonBox from './ButtonBox';
import Heading from './Heading';

function TaskPreview({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <Box className={`${className} flex-row justify-between`}>
      <Heading as="h2" className="w-fit">
        {title}
      </Heading>
      <ButtonBox>
        <button className="btn btn-square h-[48px]">
          <HiOutlineTrash />
        </button>
        <button className="btn">Default</button>
      </ButtonBox>
    </Box>
  );
}

export default TaskPreview;
