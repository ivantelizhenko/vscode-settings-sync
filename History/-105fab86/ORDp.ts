import { useAppState } from '../contexts/userContext/AppContext';

function setModalId(id: string) {
  const { setStatusModal } = use(AppS);

  setStatusModal(id);
}

export default setModalId;
