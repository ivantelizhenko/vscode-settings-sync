import { useEffect, useRef, useState, type ReactNode } from "react";
import styled from "styled-components";

function ModalWindow({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      setRendered(true);
      dialog.showModal();
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
      setTimeout(() => {
        setRendered(false);
        if (dialog.open) dialog.close();
      }, 200); // match animation time
    }
  }, [isOpen]);

  if (!rendered) return null;

  return (
    <StyledDialog ref={dialogRef}>
      <Inner $visible={visible}>{children}</Inner>
    </StyledDialog>
  );
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
