import { useMutation } from '@tanstack/react-query';

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created!');

      queryClient.invalidateQueries({ queryKey: ['cabins'] });

      reset();
    },
    onError: err => toast.error(err.message),
  });
}
