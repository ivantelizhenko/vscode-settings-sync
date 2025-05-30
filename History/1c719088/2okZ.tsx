import Button from './Button';
import Input from './Input';

const style = '';

function Form({ className }: { className: string }) {
  return (
    <form className={style + ' ' + className}>
      <Input className="col-[1/-3]" />
      <Button className="col-[-1/-3]" onClick={handleFetchIssues}>
        Load issues
      </Button>
    </form>
  );
}

export default Form;
