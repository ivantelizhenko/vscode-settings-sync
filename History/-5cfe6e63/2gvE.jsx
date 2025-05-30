import styled, { css } from "styled-components";
import Heading from "./Heading";

import Icon from "./Icon";
import Button from "./Button";

function DonatePage2({ setPage }) {
  return (
    <Wrapper>
      <Navigation>
        <Circle $active={false}>1</Circle>
        <Line />
        <Circle $active={true}>2</Circle>
      </Navigation>
      <div>
        <Heading as="h2">Вкажіть свої дані</Heading>
        <p style={{ color: "gray" }}>Не обов'язково</p>
      </div>

      <Input>
        <label>Ім'я</label>
        <input type="text" placeholder="Василь" />
      </Input>
      <Input>
        <label>Прізвище</label>
        <input type="text" placeholder="Стус" />
      </Input>
      <Input>
        <label>Телефон</label>
        <input type="text" placeholder="(0ХХ) ХХХ-ХХ-ХХ" />
      </Input>
      <Input>
        <label>E-mail</label>
        <input type="text" placeholder="vasha_poshta@example.com" />
      </Input>
      <Checkbox>
        <div>
          <CheckboxIcon id="check" size={16} strokeWidth={2} />
          <input type="checkbox" />
          <CustomCheckbox />
        </div>
        <span>
          Я ознайомився/лась з Публічною офертою щодо надання благодійної
          пожертви та погоджуюся з тим, що введена мною особиста інформація буде
          використана згадно з Політикою приватності Вебсайту.
        </span>
      </Checkbox>

      <BoxV>
        <Button type="fill">Перейти до оплати</Button>
        <Button type="outline" onClick={() => setPage("overview")}>
          Скасувати
        </Button>
      </BoxV>
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

const BoxV = styled.div`
  display: grid;
  row-gap: 8px;
`;

export default DonatePage2;
