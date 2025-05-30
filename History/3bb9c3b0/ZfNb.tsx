import { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ButtonDefault from './Button';

function ModalWindow({
  children,
  isOpen,
  handleCloseModal,
}: {
  children: ReactNode;
  isOpen: boolean;
  handleCloseModal: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);

  function handleOpenModal() {
    dialog.current!.close();
    dialog.current!.style.display = 'none';
  }

  useEffect(() => {
    if (dialog.current === null) return;
    if (isOpen) {
      dialog.current.showModal();
      dialog.current.style.display = 'grid';
    } else {
      handleOpenModal();
    }
  }, [isOpen]);

  // function closeModal() {
  //   handleOpenModal();

  //   handleCloseModal();
  // }

  return (
    <Wrapper ref={dialog}>
      <Window>{children}</Window>
    </Wrapper>
  );
}

const Wrapper = styled.dialog`
  display: none;
  place-content: center;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  background-color: transparent;

  &::backdrop {
    backdrop-filter: blur(3px);
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  }
`;

const Window = styled.div`
  background-color: var(--color-gray-100);
  padding: 6px 12px;
  position: relative;
`;

export default ModalWindow;
