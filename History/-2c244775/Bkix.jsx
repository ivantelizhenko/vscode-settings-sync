import { useDispatch } from "react-redux";

import Overlay from "./Overlay";
import ModalWindow from "./ModalWindow";
import { closeModal } from "../../productsSlice";

function Modal() {
  const dispatch = useDispatch();

  function closeModalHandler(e) {
    dispatch(closeModal());
  }

  return (
    <div>
      <Overlay onClick={closeModalHandler} />
      <ModalWindow>Heeeey</ModalWindow>
    </div>
  );
}

export default Modal;
