import Button from './Button';
import Input from './Input';

function Form() {
  return (
    <form>
      <Input className="col-[1/-3]" />
      <Button className="col-[-1/-3]" onClick={handleFetchIssues}>
        Load issues
      </Button>
    </form>
  );
}

export default Form;
