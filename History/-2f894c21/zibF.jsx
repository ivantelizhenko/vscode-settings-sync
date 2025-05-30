import styled from "styled-components";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import Heading from "./Heading";

function ActionCard({ title, description }) {
  return (
    <Wrapper>
      <UnstyledButton>
        <Icon id="link" size={64} />
      </UnstyledButton>
      <Text>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 350px;
  padding: 24px 16px;
  border-radius: 24px;
  background-color: #629a64;
`;

const Text = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ActionCard;
