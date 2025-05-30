import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  console.log('hey');
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
    onError: err => {
      console.log('Error', err);
    },
  });

  return { logout, isLoading };
}
