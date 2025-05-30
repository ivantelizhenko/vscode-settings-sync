import styled, { css } from "styled-components";
import Heading from "./Heading";
import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

function CreatePost1({ setPage }) {
  const [selectedOption, setSelectedOption] = useState("shelter");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

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
        <Heading>Місцезнаходження</Heading>
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

      <BoxV>
        <Button type="fill" onClick={() => setPage("donate-second-page")}>
          Далі
        </Button>
        <Button type="outline" onClick={() => setPage("overview")}>
          Скасувати
        </Button>
      </BoxV>
    </Wrapper>
  );
}

const Input = styled.div`
  display: grid;
  row-gap: 8px;
  width: 100%;

  input {
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
