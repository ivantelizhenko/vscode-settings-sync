import styled from "styled-components";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";

function ActionCard() {
  return (
    <Wrapper>
      <UnstyledButton>
        <Icon id="link" />
      </UnstyledButton>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default ActionCard;
