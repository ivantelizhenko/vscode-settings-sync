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
    <Box className={`justify-center ${className}`}>
      <Heading as="h2" className="w-fit">
        {title}
      </Heading>
      <ButtonBox>
        <button className="btn btn-square">
          <HiOutlineTrash />
        </button>
      </ButtonBox>
    </Box>
  );
}

export default TaskPreview;
