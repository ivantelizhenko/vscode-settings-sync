const style =
  'button cursor-pointer border border-[color-mix(in oklch, currentColor 50%, #0000)]';

function Button({ className }: { className?: string }) {
  return <button className={style + ' ' + className}>Button</button>;
}

export default Button;
