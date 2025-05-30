import styled from 'styled-components';
import { Button } from './Button';
import { useAppState } from '../contexts/userContext/AppContext';

const StyledConfirmModal = styled.div``;

type ConfirmModalProps = {
  handleAccept: () => void;
};

function ConfirmModal(handleAccept: ConfirmModalProps) {
  const { closeModal } = useAppState();
  console.log(handleAccept);
  return (
    <StyledConfirmModal>
      <Button width="15rem" onClick={closeModal}>
        Undo
      </Button>
    </StyledConfirmModal>
  );
}

export default ConfirmModal;
