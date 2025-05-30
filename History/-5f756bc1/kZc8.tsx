const style = 'button cursor-pointer border border-inherit';

function Button({ className }: { className?: string }) {
  return <button className={style + ' ' + className}>Button</button>;
}

export default Button;
