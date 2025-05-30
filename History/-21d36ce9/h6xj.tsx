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
      <Heading as="h2" className="flex items-center">
        {title}
      </Heading>
      <ButtonBox></ButtonBox>
    </Box>
  );
}

export default TaskPreview;
