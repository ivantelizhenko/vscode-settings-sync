import { ComponentPropsWithoutRef, forwardRef } from 'react';

/**
 * Here some custom props and *ComponentPropsWithoutRef("input")* allows to add some inputs' props, that we need
 */
type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

/**
 * @param id - my prop
 * @param label - my prop
 * @param props - all other props, that we add for input only
 *
 * also i add *props* to my input element
 */
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
