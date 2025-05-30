import { useAppState } from '../contexts/userContext/AppContext';

function setModalId(id: string) {
  const { setStatusModal } = useAppState();

  setStatusModal(id);
}

export default setModalId;
