import styled, { css } from "styled-components";
import Heading from "./Heading";

function Donate() {
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
  border: 2px solid #a35600;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: #a35600;
  }
`;

export default Donate;
