import { ComponentPropsWithoutRef } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {};

function Form({}: FormProps) {
  return <form></form>;
}

export default Form;
