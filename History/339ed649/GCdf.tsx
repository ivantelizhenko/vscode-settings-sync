import DefaultButton from './DefaultButton';

function QuestionWindow({ children, onSubmit, onReject }: QuestionWindowProps) {
  return (
    <div>
      <p></p>
      <Button>Yes</Button>
      <Button>No</Button>
    </div>
  );
}

const Button = styled(DefaultButton)``;

export default QuestionWindow;
