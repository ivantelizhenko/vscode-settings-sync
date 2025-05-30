import { useAppState } from '../contexts/userContext/AppContext';

function useModal(id: string) {
  const { setStatusModal } = useAppState();

  setStatusModal(id);
}

export default useModal;
