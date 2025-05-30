import { singup as signupApi } from '../../services/apiAuth';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: () => {},
  });
}
