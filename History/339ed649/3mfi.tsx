import DefaultButton from './DefaultButton';

function QuestionWindow({ children, onSubmit, on }) {
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
