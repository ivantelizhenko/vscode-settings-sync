import { useEffect, useRef, useState, type ReactNode } from "react";
import styled from "styled-components";

function ModalWindow({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!dialog.current) return;

    if (isOpen) {
      dialog.current.showModal();
      // після відкриття — даємо CSS-класу включитись
      requestAnimationFrame(() => setVisible(true));
    } else {
      // знімаємо CSS-анімацію
      setVisible(false);
      // чекаємо завершення анімації, потім закриваємо
      setTimeout(() => {
        if (dialog.current?.open) dialog.current.close();
      }, 200); // має збігатись з часом анімації
    }
  }, [isOpen]);

  return (
    <Wrapper ref={dialog} $visible={visible}>
      {children}
    </Wrapper>
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
