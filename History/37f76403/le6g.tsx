import styled from 'styled-components';
import { Button } from './Button';
import { useAppState } from '../contexts/userContext/AppContext';

const StyledConfirmModal = styled.div``;

function ConfirmModal(handleAccept: () => void) {
  const { closeModal } = useAppState();

  return (
    <StyledConfirmModal>
      <Button onClick={handleAccept}>Accept</Button>
      <Button onClick={closeModal}>Undo</Button>
    </StyledConfirmModal>
  );
}

export default ConfirmModal;
