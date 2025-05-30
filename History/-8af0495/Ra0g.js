import { useQuery } from '@tanstack/react-query';
import { createUser as createUserApi } from '../../services/apiUsers';

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createUser } = useMutation({
    mutationFn: createUserApi,
    onSuccess: () => {
      toast.success('New user successfully created!');

      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: err => toast.error(err.message),
  });

  return { isCreating, createUser };
}
