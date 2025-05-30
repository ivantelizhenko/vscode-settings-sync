import styled, { css } from "styled-components";
import Heading from "./Heading";

function Donate() {
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
            name="donateType"
            value="shelter"
            checked={selectedOption === "shelter"}
            onChange={handleChange}
          />
          В притулок
        </RadioOption>

        <RadioOption>
          <RadioInput
            name="donateType"
            value="animal"
            checked={selectedOption === "animal"}
            onChange={handleChange}
          />
          Конкретній тварині
        </RadioOption>
      </RadioGroup>
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

export default Donate;
