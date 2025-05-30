import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

function useLogin() {
  const navigate = useNavigate();

  useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      navigate('/dashboard');
    },
  });
}
