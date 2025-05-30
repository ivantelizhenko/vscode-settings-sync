const style = 'button cursor-pointer border border-[#666] rounded-md';

function Button({ className }: { className?: string }) {
  return <button className={style + ' ' + className}>Button</button>;
}

export default Button;
