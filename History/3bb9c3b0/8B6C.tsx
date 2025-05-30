import { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';

function ModalWindow({
  children,
  isOpen,
}: {
  children: ReactNode;
  isOpen: boolean;
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

  return (
    <Wrapper ref={dialog}>
      <Window>
        {children}
        <ButtonClose>Close</ButtonClose>
      </Window>
    </Wrapper>
  );
}

const Wrapper = styled.dialog`
  display: grid;
  place-content: center;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(3px);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));

  position: relative;
`;

const Window = styled.div`
  background-color: var(--color-gray-100);
  padding: 24px 36px;
`;

const ButtonClose = styled.button`
  position: absolute;
`;

export default ModalWindow;
