import toast from 'react-hot-toast';

const queryClient = useQueryClient();

const { isLoading: isDeleting, mutate } = useMutation({
  mutationFn: deleteCabit,
  onSuccess: () => {
    toast.success('Cabin successfully deleted!');

    queryClient.invalidateQueries({ queryKey: ['cabins'] });
  },
  onError: err => toast.error(err.message),
});
