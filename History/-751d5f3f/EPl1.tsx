import styled from 'styled-components';

function Select({
  options,
}: {
  options: { title: string; value: string; id: string }[];
}) {
  return (
    <StyledSelect>
      {options.map(({ title, value, id }) => (
        <option key={id} value={value}>
          {title}
        </option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  padding: 8px 16px;
  background-color: var(--color-gray-500);
  color: var(--color-gray-100);
`;

export default Select;
