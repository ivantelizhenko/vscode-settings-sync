import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddCabin() {
  const [isOpneModal, setIsOpenModal] = useState(false);

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <div>
      <Button onClick={() => setIsOpenModal(show => !show)}>
        Add new cabin
      </Button>
      {isOpneModal && (
        <Modal>
          <CreateCabinForm onSetIsOpenModal={setIsOpenModal} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
