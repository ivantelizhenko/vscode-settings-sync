import styled from "styled-components";
import { useStore } from "../contexts/store";

function Turn() {
  const { turn } = useStore();

  return <Message>{`${turn}'s move`}</Message>;
}

const Message = styled.p``;

export default Turn;
