interface InputProps {
  type: string;
  id: string;
  label: string;
}

function Input() {
  return (
    <p>
      <label htmlFor={id}>text</label>
      <input id={id} type="" />
    </p>
  );
}

export default Input;
