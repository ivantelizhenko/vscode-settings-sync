import { useNotes } from '../Contexts/NotesContext';

function Highlight({ text, as }) {
  const { searchValue } = useNotes();

  const firstIndex = text.indexOf(searchValue.at(0));
  const lastIndex = searchValue.length;

  const higlightingText = text.slice();

  console.log(firstIndex, lastIndex);

  return <div>{text}</div>;
}

export default Highlight;
