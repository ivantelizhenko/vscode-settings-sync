import { ComponentPropsWithoutRef, FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

function Form(props: FormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      {props.children}
    </form>
  );
}

export default Form;
