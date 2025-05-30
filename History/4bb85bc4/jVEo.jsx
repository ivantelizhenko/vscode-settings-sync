import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import Icon from "./Icon";
import { WEIGHTS } from "../constants";
import Button from "./Button";

const testData = [
  {
    id: "asdrgrngrjgr1233312",
    title: "Вид тварини",
    options: ["Кіт", "Собака"],
  },
  {
    id: "27747574573",
    title: "Вік",
    options: [
      "< 1 місяця",
      "1-6 місяців",
      "6-12 місяців",
      "1-2 роки",
      "2-7 роки",
      "7+ років",
    ],
  },
  {
    id: "asdrgrngrjgr",
    title: "Стан здоров'я",
    options: [
      "Здорова",
      "Стерилізована",
      "Щеплена",
      "Частково щеплена",
      "Поранена",
      "В тяжкому стані",
      "Хвора",
    ],
  },
];

function Filters({ handleClose }) {
  return (
    <Wrapper open>
      <ButtonClose onClick={handleClose}>
        <Icon id="close" size={24} strokeWidth={2} />
      </ButtonClose>
      {testData.map(({ title, options, id }) => (
        <Block key={id}>
          <Heading>{title}</Heading>
          <Box>
            {options.map((title) => (
              <Checkbox key={title}>
                <CheckboxIcon id="check" size={16} strokeWidth={2} />
                <input type="checkbox" />
                <CustomCheckbox />
                <span>{title}</span>
              </Checkbox>
            ))}
          </Box>
        </Block>
      ))}
      <Block>
        <Heading>Місцезнаходження</Heading>
        <Box>
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
        </Box>
      </Block>
      <Box>
        <Button type="fill">Шукати</Button>
        <Button type="outline">Очистити все</Button>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.dialog`
  background-color: white;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  padding: 48px 16px;

  display: grid;
  row-gap: 24px;
  overflow-y: scroll;
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

const Box = styled.div`
  display: grid;
  row-gap: 12px;
`;

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
export default Filters;
