import { useMutation } from '@tanstack/react-query';
import { logout } from '../../services/apiAuth';

export function useLogout() {
  const { mutation: logout, isLoading } = useMutation({
    mutationFn: logout,
  });
}
