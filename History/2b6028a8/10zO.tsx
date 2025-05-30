import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

type AnchorProps = ComponentPropsWithoutRef<'a'>;

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

function Button(props: ButtonProps | AnchorProps) {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}

export default Button;

type ObjectsCat = object;
type ObjectsDog = object;

/**
 *
 * @param arg - some arg, with some possibly type
 * @returns: boolean
 */
function name(arg: ObjectsCat | ObjectsDog): arg is ObjectsCat {
  return 'soemthing' in arg;
}
