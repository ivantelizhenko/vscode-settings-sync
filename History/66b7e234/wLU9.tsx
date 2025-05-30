import styled from "styled-components";
import { useStore } from "../contexts/store";

function Turn() {
  const { turn } = useStore();

  return <Message>{`${turn}'s move`}</Message>;
}

const Message = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export default Turn;
