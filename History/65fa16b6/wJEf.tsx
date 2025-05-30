import { HiOutlineCog8Tooth, HiOutlinePuzzlePiece } from 'react-icons/hi2';
import ButtonGhost from '../Button/ButtonGhost';
import { PagesSettings } from '@/app/AddNewQuest';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

function Navigation() {
  const { settingPage, setSettingPage } = useAppSelector(
    store => store.createQuest,
  );
  const dispatch = useAppDispatch();

  return (
    <nav>
      <ButtonGhost
        onClick={() => handleSetPage('mainSettings')}
        selected={settingPage === 'mainSettings'}
      >
        <HiOutlineCog8Tooth size={24} />
        General Settings
      </ButtonGhost>
      <ButtonGhost
        onClick={() => handleSetPage('questions')}
        selected={settingPage === 'questions'}
      >
        <HiOutlinePuzzlePiece size={24} />
        Tasks
      </ButtonGhost>

      <button
        className="btn bg-brand mt-[64px] w-full px-[14px] py-[16px] text-white"
        type="submit"
      >
        Create a quest
      </button>
    </nav>
  );
}

export default Navigation;
