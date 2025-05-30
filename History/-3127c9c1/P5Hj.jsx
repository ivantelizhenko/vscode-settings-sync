import styled, { css } from "styled-components";
import Heading from "./Heading";
import Icon from "./Icon";
import Button from "./Button";

function CreatePost2({ setPage }) {
  return (
    <Wrapper>
      <Heading as="h2">Створити оголошення</Heading>
      <Navigation>
        <Circle $active={false}>1</Circle>
        <Line />
        <Circle $active={true}>2</Circle>
      </Navigation>

      <p style={{ fontSize: "20px" }}>Контактні дані</p>

      <Input>
        <label>
          Телефон<span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" placeholder="(0ХХ) ХХХ-ХХ-ХХ" />
      </Input>

      <Input>
        <label>E-mail</label>
        <input type="text" placeholder="(0ХХ) ХХХ-ХХ-ХХ" />
      </Input>

      <p>Соцмережі</p>

      <InputIcon>
        <img
          src="../../public/social-media/viber.svg"
          width={36}
          height={36}
          alt="viber"
        />
        <input type="text" placeholder="(0ХХ) ХХХ-ХХ-ХХ" />
      </InputIcon>
      <InputIcon>
        <img
          src="../../public/social-media/telegram.svg"
          width={36}
          height={36}
          alt="telegram"
        />
        <input type="text" placeholder="@Name" />
      </InputIcon>
      <InputIcon>
        <img
          src="../../public/social-media/instagram.svg"
          width={36}
          height={36}
          alt="instagram"
        />
        <input type="text" placeholder="@Name" />
      </InputIcon>
      <InputIcon>
        <img
          src="../../public/social-media/facebook.svg"
          width={36}
          height={36}
          alt="facebook"
        />
        <input type="text" placeholder="(0ХХ) ХХХ-ХХ-ХХ" />
      </InputIcon>

      <Button type="fill">Опублікувати</Button>
      <Button type="outline" onClick={() => setPage("user-account")}>
        Скасувати
      </Button>
    </Wrapper>
  );
}

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

const InputIcon = styled(Input)`
  display: flex;
  gap: 12px;
  align-items: center;
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

export default CreatePost2;
