import toast from 'react-hot-toast';

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success('Cabin successfully edited!');

      queryClient.invalidateQueries({ queryKey: ['cabins'] });

      reset();
    },
    onError: err => toast.error(err.message),
  });
  return { isEditing, editCabin };
}
