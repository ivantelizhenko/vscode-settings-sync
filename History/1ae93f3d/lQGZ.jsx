import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenicated } = useAuth();
  const navigate = useNavigate();

  return children;
}

export default ProtectedRoute;
