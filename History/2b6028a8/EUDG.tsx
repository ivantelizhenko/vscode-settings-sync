import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  el: 'button';
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  el: 'anchor';
};

function Button({ el, ...otherProps }: ButtonProps | AnchorProps) {
  if (el === 'anchor') {
    return <a className="button" {...otherProps}></a>;
  }

  return <button className="button" {...otherProps}></button>;
}

export default Button;
