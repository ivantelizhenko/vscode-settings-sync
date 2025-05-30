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

const Wrapper = styled.dialog<{ $visible: boolean }>`
  width: 50%;
  z-index: 5000;
  position: absolute;
  inset: 50%;
  transform: translate(-50%, -50%);
  border: none;
  max-width: 100%;
  max-height: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0 0 0/ 0.2);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(0.95)"};
  transition: opacity 2s ease, transform 0.2s ease;

  @media (max-width: 750px) {
    width: 90%;
  }

  &::backdrop {
    backdrop-filter: blur(3px);
  }
`;

export default ModalWindow;
