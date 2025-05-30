import styled from "styled-components";

function Button() {
  return <div></div>;
}

const ButtonReset = styled.button`
  background-color: var(--color-primary);
  color: var(--color-surface);
  font-weight: bold;
  padding: 0.75rem 2rem;
  font-size: 1.5rem;
  border-radius: 6px;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 1px;

  background-color: var(--color-primary);
  border: none;

  transition: background-color 0.5s;

  &:hover {
    transition: background-color 0.2s;
    background-color: var(--color-primary-hover);
  }

  &:disabled {
    opacity: 0.4;
    background-color: var(--color-disabled);
  }
`;

export default Button;
