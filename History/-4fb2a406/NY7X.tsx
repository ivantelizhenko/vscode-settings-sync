import {
  ComponentPropsWithoutRef,
  FormEvent,
  useImperativeHandle,
  useRef,
} from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

function Form({ children, onSave, ...otherProps }: FormProps) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current!.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
}

export default Form;
