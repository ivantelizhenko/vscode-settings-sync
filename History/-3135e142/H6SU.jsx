import styled, { css } from "styled-components";
import Heading from "./Heading";
import Icon from "./Icon";
import Button from "./Button";

function CreatePost1({ setPage }) {
  return (
    <Wrapper>
      <Heading as="h2">Створити оголошення</Heading>
      <Navigation>
        <Circle $active={true}>1</Circle>
        <Line />
        <Circle $active={false}>2</Circle>
      </Navigation>

      <BoxV>
        <p>Вид тварини</p>
        <Select>
          <select>
            <option>Кіт</option>
          </select>
          <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
        </Select>
      </BoxV>
      <BoxV>
        <p>Стать тварини</p>
        <Select>
          <select>
            <option>Чоловіча</option>
          </select>
          <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
        </Select>
      </BoxV>
      <BoxV>
        <p>Вік тварини</p>
        <Select>
          <select>
            <option>2-4 місяці</option>
          </select>
          <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
        </Select>
      </BoxV>

      <Input>
        <label>Стан здоров'я</label>
        <input type="text" placeholder="Введіть стан здоров'я" />
      </Input>

      <Block>
        <p>Місцезнаходження</p>
        <BoxV>
          <Select>
            <select>
              <option>Область</option>
            </select>
            <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
          </Select>
          <Select>
            <select>
              <option>Населений пунк</option>
            </select>
            <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
          </Select>
        </BoxV>
      </Block>

      <Input>
        <label>Додатковий опис</label>
        <textarea type="text" placeholder="Введіть текст" />
      </Input>

      <Button type="outline">Додати фото</Button>

      <Checkbox>
        <CheckboxIcon id="check" size={16} strokeWidth={2} />
        <input type="checkbox" />
        <CustomCheckbox />
        <span>Тимчасово на перетримці</span>
      </Checkbox>

      <Button type="fill" onClick={() => setPage("createPost2")}>
        Далі
      </Button>
      <Button type="outline" onClick={() => setPage("user-account")}>
        Скасувати
      </Button>
    </Wrapper>
  );
}

const CheckboxIcon = styled(Icon)`
  color: white;
  position: relative;
  z-index: 10;
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
    opacity: 0;
  }

  & input:checked + ${CustomCheckbox} {
    background-color: var(--color-secondary);
    border: none;
  }
`;

const Input = styled.div`
  display: grid;
  row-gap: 8px;
  width: 100%;

  input,
  textarea {
    padding: 12px 16px;
    width: 100%;
    border: 1px solid gray;
    border-radius: 8px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  row-gap: 24px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Circle = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  ${(props) =>
    props.$active
      ? css`
          color: white;
          background-color: var(--color-secondary);
        `
      : css`
          color: #b3b3b3;
          background-color: #f5f5f5;
        `}
`;
const Line = styled.div`
  height: 1px;
  background-color: #b3b3b3;
  width: 40px;
`;

const Select = styled.div`
  position: relative;
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  select {
    background-color: transparent;
    border: none;
    appearance: none;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;

const BoxV = styled.div`
  display: grid;
  row-gap: 8px;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default CreatePost1;
