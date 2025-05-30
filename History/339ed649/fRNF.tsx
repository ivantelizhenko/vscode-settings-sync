import DefaultButton from './DefaultButton';

function QuestionWindow() {
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
