const style = 'button cursor-pointer';

function Button({ className }: { className?: string }) {
  return <button className={style + ' ' + className}>Button</button>;
}

export default Button;
