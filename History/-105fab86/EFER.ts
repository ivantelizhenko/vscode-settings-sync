import { useAppState } from '../contexts/userContext/AppContext';
import { ModalVariantsType } from '../contexts/userContext/AppContextTypes';

function useModal(id: ModalVariantsType) {
  const { setStatusModal } = useAppState();

  setStatusModal(id);
}

export default useModal;
