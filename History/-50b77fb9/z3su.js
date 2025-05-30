import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../../services/apiUsers';

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  console.log(user);

  // return {
  //   isLoading,
  //   user,
  //   error,
  // };
}
