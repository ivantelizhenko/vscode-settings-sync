import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";
import { WEIGHTS } from "../constants";

function Filters({ open, handleClose }) {
  return (
    <Wrapper open={open}>
      <ButtonClose onClick={handleClose}>
        <Icon id="close" size={24} strokeWidth={2} />
      </ButtonClose>
      <Block>
        <Heading>Вид тварини</Heading>
        <Checkboxes>
          <Checkbox>
            <CheckboxIcon id="check" size={16} strokeWidth={2} />
            <CustomCheckbox />
            <input type="checkbox" />
            Кіт
          </Checkbox>
          <Checkbox>
            <CheckboxIcon id="check" size={16} strokeWidth={2} />
            <CustomCheckbox />
            <input type="checkbox" />
            Собака
          </Checkbox>
        </Checkboxes>
      </Block>
    </Wrapper>
  );
}

const Wrapper = styled.dialog`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 48px 16px;

  display: grid;
  row-gap: 24px;
`;

const ButtonClose = styled(UnstyledButton)`
  position: absolute;
  top: 48px;
  right: 16px;
`;

const Heading = styled.h4`
  font-weight: ${WEIGHTS.normal};
  height: fit-content;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Checkboxes = styled.div`
  display: grid;
  row-gap: 12px;
`;

const CheckboxIcon = styled(Icon)`
  color: transparent;
`;

const CustomCheckbox = styled.span`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border: 1px solid gray;
  border-radius: 4px;
  background-color: transparent;
`;

const Checkbox = styled.label`
  --padding: 16px;
  --gap: 12px;

  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
  /* padding-left: calc(var(--padding) + var(--gap)); */

  input {
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: 200;
    /* opacity: 0; */
  }

  & input:checked + ${CustomCheckbox} {
    background-color: var(--color-secondary);
    border: none;
  }
`;
export default Filters;
