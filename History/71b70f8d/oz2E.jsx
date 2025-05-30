import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import ButtonIcon from '../../ui/ButtonIcon';
import Spinner from '../../ui/Spinner';
import { useLogout } from './useLogout';

function Logout() {
  const { logout, isLoading } = useLogout();

  if (isLoading) return <Spinner />;

  return (
    <ButtonIcon onClick={logout}>
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
