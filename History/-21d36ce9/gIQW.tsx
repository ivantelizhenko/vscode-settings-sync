import Box from './Box';
import Heading from './Heading';

function TaskPreview({ title, handleDelete, handleChange }) {
  return (
    <Box>
      <Heading as="h2">{title}</Heading>
    </Box>
  );
}

export default TaskPreview;
