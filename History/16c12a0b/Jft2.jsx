import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddUser() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="user-form">
          <Button>Add new user</Button>
        </Modal.Open>
        <Modal.Window name="user-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddUser;
