import { useNotes } from '../Contexts/NotesContext';

function Highlight({ text, as }) {
  const { searchValue } = useNotes();

  const firstIndex = text.indexOf(searchValue.at(0));
  const lastIndex = searchValue.length;

  const firstPart = text.slice(0, firstIndex);
  const higlightingText = text.slice(firstIndex, lastIndex);
  const lastPart = text.slice(lastIndex + 2, text.length - lastIndex);
  console.log(firstPart);
  // console.log(higlightingText);
  console.log(lastPart);

  return <div>{text}</div>;
}

export default Highlight;
