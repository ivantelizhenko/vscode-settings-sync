import { useState } from 'react';
import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open>
        <Button>Show table</Button>
      </Modal.Open>
      <Modal.Window>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

function Open({ children }) {
  return <div>{children}</div>;
}
// function AddCabin() {
//   const [isOpneModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal(show => !show)}>
//         Add new cabin
//       </Button>
//       {isOpneModal && (
//         <Modal onCloseModal={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
