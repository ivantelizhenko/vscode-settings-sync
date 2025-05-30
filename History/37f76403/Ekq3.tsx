import styled from 'styled-components';
import { Button } from './Button';
import { useAppState } from '../contexts/userContext/AppContext';
import Modal from './Modal';

const StyledConfirmModal = styled.div`
  display: flex;

  gap: 8rem;
`;

type ConfirmModalProps = {
  handleAccept: () => void;
};

function ConfirmModal({ handleAccept }: ConfirmModalProps) {
  const { closeModal } = useAppState();

  return (
    <Modal>
      <StyledConfirmModal>
        <Button width="20rem" onClick={handleAccept}>
          Accept
        </Button>
        <Button width="20rem" onClick={closeModal}>
          Undo
        </Button>
      </StyledConfirmModal>
    </Modal>
  );
}

export default ConfirmModal;
