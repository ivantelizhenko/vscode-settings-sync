import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;

  // [key: string]: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}

export default Input;
