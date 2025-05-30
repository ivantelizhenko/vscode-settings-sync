import styled, { css } from "styled-components";
import Heading from "./Heading";
import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

function DonatePage1({ setPage }) {
  const [selectedOption, setSelectedOption] = useState("shelter");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Wrapper>
      <Navigation>
        <Circle $active={true}>1</Circle>
        <Line />
        <Circle $active={false}>2</Circle>
      </Navigation>
      <Heading as="h2">Куди донатимо?</Heading>

      <RadioGroup>
        <RadioOption>
          <RadioInput
            value="shelter"
            checked={selectedOption === "shelter"}
            onChange={handleChange}
          />
          В притулок
        </RadioOption>

        <RadioOption>
          <RadioInput
            value="animal"
            checked={selectedOption === "animal"}
            onChange={handleChange}
          />
          Конкретній тварині
        </RadioOption>
      </RadioGroup>
      <BoxV>
        <p>Вкажіть притулок</p>
        <Select>
          <select>
            <option>Дай лапу, друже!</option>
          </select>
          <SelectIcon id="chevron-down" size={16} strokeWidth={2} />
        </Select>
      </BoxV>

      <BoxV>
        <p>Оберіть суму разового внеску</p>
        <SumWrapper>
          <Sum>50₴</Sum>
          <Sum>100₴</Sum>
          <Sum>200₴</Sum>
          <Sum>500₴</Sum>
          <Sum>1000₴</Sum>
          <Sum>Інша сума</Sum>
        </SumWrapper>
      </BoxV>

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

const SumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Sum = styled.div`
  width: fit-content;
  padding: 8px 12px;
  border: 1px solid;
  border-radius: 12px;
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
const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

const RadioInput = styled.input.attrs({ type: "radio" })`
  appearance: none;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border: 2px solid var(--color-secondary);
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: var(--color-secondary);
  }
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

export default DonatePage1;
