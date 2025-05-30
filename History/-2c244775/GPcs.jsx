import { useDispatch } from "react-redux";

import Overlay from "./Overlay";
import ModalWindow from "./ModalWindow";

function Modal() {
  const dispatch = useDispatch();

  function closeModalHandler(e) {
    dispatch(closeModal());
  }

  return (
    <div>
      <Overlay onClick={closeModalHandler} />
      <ModalWindow></ModalWindow>
    </div>
  );
}

export default Modal;
