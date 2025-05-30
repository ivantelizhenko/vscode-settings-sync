import { useNotes } from '../Contexts/NotesContext';

function Highlight({ text: textStr, as }) {
  const { searchValue } = useNotes();

  const text = textStr.split('');

  const firstIndex = text.indexOf(searchValue.at(0));
  const lastIndex = searchValue.length;

  const firstPart = text.splice(0, firstIndex).join('');
  const higlightingText = text.splice(0, lastIndex).join('');
  const lastPart = text.join('');

  return (
    <span>
      {firstPart}
      <span className="highlight">{higlightingText}</span>
      {lastPart}
    </span>
  );
}

export default Highlight;
