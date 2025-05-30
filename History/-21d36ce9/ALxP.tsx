import Box from './Box';
import Heading from './Heading';

function TaskPreview({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <Box className={className}>
      <Heading as="h2">{title}</Heading>
    </Box>
  );
}

export default TaskPreview;
