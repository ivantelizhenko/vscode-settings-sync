interface InputProps {
  type: string;
  id: string;
  label: string;
}

function Input({ type, id, label }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </p>
  );
}

export default Input;
