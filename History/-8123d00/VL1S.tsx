import { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-left: auto;
  width: 20%;
  border: 1px solid #d1d5db;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  padding: 0.8rem 1.2rem;
`;

function Input() {
  const [data, setData] = useState('');
  return (
    <StyledInput
      onChange={info => setData(info)}
      placeholder="Search..."
      type="search"
    />
  );
}

export default Input;
