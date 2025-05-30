import { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {};

function Form(props: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {}

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
}

export default Form;
