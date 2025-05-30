import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  el: 'button';
  chidlren?: ReactNode;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  el: 'anchor';
  chidlren?: ReactNode;
};

function isAnchorProps(
  el,
  otherprops: ButtonProps | AnchorProps
): props is AnchorProps {
  return el === 'anchor';
}

function Button({ el = 'button', ...otherProps }: ButtonProps | AnchorProps) {
  if (isAnchorProps(el, otherProps)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;
