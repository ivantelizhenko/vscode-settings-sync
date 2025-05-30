import { useAppState } from '../contexts/userContext/AppContext';

function setModalId(id: string) {
  const { setStatusModal } = use(AppContext);

  setStatusModal(id);
}

export default setModalId;
