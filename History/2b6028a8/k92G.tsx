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

type ObjectsCat<T extends object> = T;
type ObjectsDog<T extends object> = T;

const cat = { something: 'test' };
const dog = { dog: 'dog' };

/**
 *
 * if *return* true arg will be a ObjectCat
 *
 * @param arg - some arg, with some possibly type
 * @returns boolean
 */
function name(arg: ObjectsCat | ObjectsDog): arg is ObjectsCat {
  return 'something' in arg;
}

function log(arg: ObjectsCat | ObjectsDog) {
  if (!name(arg)) {
    console.log('i am not a cat');
  } else {
    console.log('i am 100% a cat');
  }
}

log(cat);
log(dog);
