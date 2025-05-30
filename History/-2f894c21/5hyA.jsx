import styled from "styled-components";
import Icon from "./Icon";
import UnstyledButton from "./UnstyledButton";

function ActionCard() {
  return (
    <div>
      <UnstyledButton>
        <Icon id="link" />
      </UnstyledButton>
    </div>
  );
}

export default ActionCard;
