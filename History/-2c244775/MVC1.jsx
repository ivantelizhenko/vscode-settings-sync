import { useDispatch } from "react-redux";

import Overlay from "./Overlay";
import ModalWindow from "./ModalWindow";

function Modal() {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(closeModal());
  }

  return (
    <div>
      <Overlay onClick={closeModal} />
      <ModalWindow></ModalWindow>
    </div>
  );
}

export default Modal;
