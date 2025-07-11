import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';

const FullPage = styled.div`
  height: 100vh;
  background-color: ;
`;

function ProtectedRoute({ children }) {
  // 1. Load the authenticated user
  const { user, isLoading } = useUser();

  // 2. While loading, show a spinner
  if (isLoading) return <Spinner />;

  // 3. If there is NO authenicated user, redirect to the /login

  // 4. If there is a user, render the app
  return children;
}

export default ProtectedRoute;
