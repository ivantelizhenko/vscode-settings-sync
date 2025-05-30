import styled from "styled-components";
import Icon from "./Icon";

function ActionCard() {
  return (
    <div>
      <ActionButton>
        <Icon id="link" />
      </ActionButton>
    </div>
  );
}

const ActionButton = styled.button``;

export default ActionCard;
