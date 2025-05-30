import { ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {};

function Form(props: FormProps) {
  return <form {...props}></form>;
}

export default Form;
