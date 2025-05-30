import styled from 'styled-components';
import { Button } from './Button';

const StyledConfirmModal = styled.div``;

function ConfirmModal() {
  return (
    <StyledConfirmModal>
      <Button>Accept</Button>
      <Button onClick={}>Undo</Button>
    </StyledConfirmModal>
  );
}

export default ConfirmModal;
