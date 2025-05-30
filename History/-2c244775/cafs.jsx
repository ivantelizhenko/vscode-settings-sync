import Overlay from "./Overlay";

import ModalWindow from "./ModalWindow";

function Modal() {
  function closeModal() {}

  return (
    <div>
      <Overlay />
      <ModalWindow></ModalWindow>
    </div>
  );
}

export default Modal;
