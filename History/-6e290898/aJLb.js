import { useMutation } from '@tanstack/react-query';

export function useLogout() {
  const { mutation: logout, isLoading } = useMutation({
    mutationFn: logout,
  });
}
