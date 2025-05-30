import { useEffect, useRef, type ReactNode } from "react";
import styled from "styled-components";

function ModalWindow({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog.current === null) return;
    if (isOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [isOpen]);

  return <Wrapper ref={dialog}>{children}</Wrapper>;
}

const StyledDialog = styled.dialog`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &::backdrop {
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Inner = styled.div<{ $visible: boolean }>`
  background: white;
  border-radius: 6px;
  padding: 1rem;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 2px 4px rgba(0 0 0 / 0.2);

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) => ($visible ? "scale(1)" : "scale(0.95)")};
  transition: opacity 0.2s ease, transform 0.2s ease;
`;

export default ModalWindow;
