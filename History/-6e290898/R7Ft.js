import { useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';

export function useLogout() {
  const { mutation: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
  });

  return { logout, isLoading };
}
