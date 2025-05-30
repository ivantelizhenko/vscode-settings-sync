import ButtonGhost from '../Button/ButtonGhost';

function AddNewQuestNavigation() {
  return (
    <nav>
      <ButtonGhost
        onClick={() => setPage('mainSettings')}
        selected={page === 'mainSettings'}
      >
        <HiOutlineCog8Tooth size={24} />
        General Settings
      </ButtonGhost>
      <ButtonGhost
        onClick={() => setPage('questions')}
        selected={page === 'questions'}
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

export default AddNewQuestNavigation;
