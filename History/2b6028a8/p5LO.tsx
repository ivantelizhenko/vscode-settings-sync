import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  el: 'button';
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  el: 'anchor';
};

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;
