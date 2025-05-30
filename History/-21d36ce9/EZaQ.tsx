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
        <button className="btn btn-square">
          <HiOutlineTrash />
        </button>
        <button className="btn color-[#fff] h-[48px] w-[160px] bg-[#7BAAAF]">
          Save
        </button>
      </ButtonBox>
    </Box>
  );
}

export default TaskPreview;
