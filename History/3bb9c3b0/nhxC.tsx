import { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ButtonDefault from './Button';

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

  function closeModal() {
    dialog.current!.close();
  }

  return (
    <Wrapper ref={dialog}>
      <Window>
        {children}
        <ButtonClose onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </ButtonClose>
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
`;

const Window = styled.div`
  background-color: var(--color-gray-100);
  padding: 24px 36px;
  position: relative;
`;

const ButtonClose = styled(ButtonDefault)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default ModalWindow;
