import { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {};

function Form(props: FormProps) {
  function handleSubmit(e: Event<FormEvent>) {}

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
}

export default Form;
