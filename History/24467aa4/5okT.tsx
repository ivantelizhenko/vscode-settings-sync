import styled from 'styled-components';

function InputField(name) {
  return (
    <>
      <label htmlFor={name}>Title:</label>
      <input
        id={name}
        name={name}
        value={formData.title}
        onChange={handleChange}
        required
      />
      ;
    </>
  );
}

export default InputField;
