import styled from "styled-components";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import Heading from "./Heading";

function ActionCard({ title, description, href }) {
  return (
    <Wrapper>
      <Link href={href}>
        <UnstyledButton>
          <Icon id="link" size={64} strokeWidth={3} style={{ color: "#fff" }} />
        </UnstyledButton>
      </Link>
      <TextWrapper>
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 350px;
  padding: 24px 16px;
  border-radius: 24px;
  background-color: #629a64;
  position: relative;
  color: #fff;
`;

const Link = styled.a`
  display: inline-block;
  position: absolute;
  right: 16px;
  top: 16px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ActionCard;
