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
    <Box className={`items-center ${className}`}>
      <Heading as="h2">{title}</Heading>
      <ButtonBox></ButtonBox>
    </Box>
  );
}

export default TaskPreview;
