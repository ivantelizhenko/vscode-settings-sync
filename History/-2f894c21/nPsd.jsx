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
      <Heading as="h2">{title}</Heading>
      <p>{description}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;
`;

export default ActionCard;
