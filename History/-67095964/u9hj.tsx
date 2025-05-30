import { useEffect, useRef, type ReactNode } from "react";
import styled from "styled-components";
import X from "./X";
import O from "./O";
import useGetGame from "../hooks/useGetGames";

function ChooseSide({
  handleChoose,
  isOpen,
  children,
}: {
  handleChoose: (value: "X" | "O") => void;
  isOpen: boolean;
  children: ReactNode;
}) {
  const { data } = useGetGame();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog.current === null) return;
    if (isOpen) {
      dialog.current.showModal();
      dialog.current.style.display = "flex";
    } else {
      dialog.current.close();
      dialog.current.style.display = "none";
    }
  }, [isOpen]);

  const userXExist = !!data?.userIdX;
  const userOExist = !!data?.userIdO;

  return <Wrapper ref={dialog}>{children}</Wrapper>;
}

const Wrapper = styled.dialog`
  display: flex;
  gap: 36px;
  justify-content: center;
  align-items: center;
  padding: 36px 48px;
  width: 50%;
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  border: none;
  max-width: 100%;
  max-height: 100%;
  background-color: var(--color-main-lighter);
  box-shadow: 0 2px 4px rgba(0 0 0/ 0.2);
  border-radius: 6px;

  &::backdrop {
    width: 150%;
    height: 150%;
    backdrop-filter: blur(3px);
  }
`;

export default ChooseSide;
