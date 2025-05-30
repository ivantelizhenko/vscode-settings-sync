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
  el: 'button' | 'anchor',
  otherProps: ComponentPropsWithoutRef<'button'> | ComponentPropsWithoutRef<'a'>
): otherProps is AnchorProps {
  return el === 'anchor';
}

function Button({ el = 'button', ...otherProps }: ButtonProps | AnchorProps) {
  if (isAnchorProps(el, otherProps)) {
    return <a className="button" {...otherProps}></a>;
  }

  return <button className="button" {...otherProps}></button>;
}

export default Button;
