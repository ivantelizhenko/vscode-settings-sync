import styled from 'styled-components';
import { Button } from './Button';
import { useAppState } from '../contexts/userContext/AppContext';

const StyledConfirmModal = styled.div``;

function ConfirmModal() {
  const { closeModal } = useAppState();

  return (
    <StyledConfirmModal>
      <Button>Accept</Button>
      <Button onClick={closeModal}>Undo</Button>
    </StyledConfirmModal>
  );
}

export default ConfirmModal;
