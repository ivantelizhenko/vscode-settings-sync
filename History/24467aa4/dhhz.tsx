import styled from 'styled-components';

function InputField() {
  return (
    <>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      ;
    </>
  );
}

export default InputField;
