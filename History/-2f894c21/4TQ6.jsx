import styled from "styled-components";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";
import Heading from "./Heading";
import { QUERIES } from "../constants";

function ActionCard({ title, description, href }) {
  return (
    <Wrapper>
      <Link href={href}>
        <UnstyledButton>
          <Icon id="link" size={64} strokeWidth={2} style={{ color: "#fff" }} />
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
  display: flex;

  @media ${QUERIES.laptopAndUp} {
  }
`;

const Link = styled.a`
  position: absolute;
  right: 16px;
  top: 16px;
`;

const TextWrapper = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default ActionCard;
