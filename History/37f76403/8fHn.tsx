import styled from 'styled-components';
import { Button } from './Button';
import { useAppState } from '../contexts/userContext/AppContext';

const StyledConfirmModal = styled.div``;

type ConfirmModalProps = {
  handleAccept: () => void;
};

function ConfirmModal(handleAccept: ConfirmModalProps) {
  const { closeModal } = useAppState();

  return (
    <StyledConfirmModal>
      <Button width="15rem" onClick={handleAccept}>
        Accept
      </Button>
      <Button width="15rem" onClick={closeModal}>
        Undo
      </Button>
    </StyledConfirmModal>
  );
}

export default ConfirmModal;
