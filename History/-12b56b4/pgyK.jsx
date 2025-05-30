import { HiMoon, HiOutlineMoon } from 'react-icons/hi2';
import ButtonIcon from './ButtonIcon';
import { useDarkMode } from '../context/DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {!isDarkMode ? <HiOutlineMoon /> : <HiMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
