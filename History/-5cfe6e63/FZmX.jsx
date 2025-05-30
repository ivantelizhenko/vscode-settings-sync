import styled, { css } from "styled-components";
import Heading from "./Heading";
import { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";

function DonatePage2({ setPage }) {
  const [selectedOption, setSelectedOption] = useState("shelter");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

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

      <BoxV>
        <Button type="fill">Перейти до оплати</Button>
        <Button type="outline" onClick={() => setPage("overview")}>
          Скасувати
        </Button>
      </BoxV>
    </Wrapper>
  );
}

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
