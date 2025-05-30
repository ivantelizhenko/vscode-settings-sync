import { useMutation } from '@tanstack/react-query';

function useLogin() {
  useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });
}
