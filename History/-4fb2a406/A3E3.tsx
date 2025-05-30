import { ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {};

function Form(props: FormProps) {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
}

export default Form;
