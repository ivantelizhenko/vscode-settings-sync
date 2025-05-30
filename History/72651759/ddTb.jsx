import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddCabin() {
  const [isOpneModal, setIsOpneModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpneModal(show => !show)}>
        Add new cabin
      </Button>
      {isOpneModal && (
        <Modal>
          <CreateCabinForm />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
