import Button from './Button';
import Input from './Input';
import Link from './Link';
import Stars from './Stars';

function Header() {
  return (
    <div className="grid grid-cols-[ 1fr repeat(5,fit-content)] grid-rows-2 gap-[1rem] ">
      <Input className="col-[1/-2]" />
      <Button className="col-[-1/-2]">Load issues</Button>
      <Link url="#">Link name</Link>
      <Stars />
    </div>
  );
}

export default Header;
