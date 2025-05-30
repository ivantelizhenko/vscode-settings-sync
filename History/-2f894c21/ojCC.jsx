import styled from "styled-components";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import Heading from "./Heading";

function ActionCard({ title, description, href }) {
  return (
    <Wrapper>
      <Link>
        <UnstyledButton>
          <Icon id="link" size={64} />
        </UnstyledButton>
      </Link>
      <Text>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </Text>
    </Wrapper>
  );
}

const Link = styled.a`
  display: inline-block;
  position: absolute;
  right: 16px;
  top: 16px;
`;

const Wrapper = styled.div`
  height: 350px;
  padding: 24px 16px;
  border-radius: 24px;
  background-color: #629a64;
  position: relative;
`;

const Text = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ActionCard;
