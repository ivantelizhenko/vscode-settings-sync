import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutation: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      console.log('hey');
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
    onError: err => {
      console.log('Error', err);

      toast.error('Provided email or password are incorrect');
    },
  });

  return { logout, isLoading };
}
