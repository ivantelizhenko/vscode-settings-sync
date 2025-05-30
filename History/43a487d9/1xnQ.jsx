import { useNotes } from '../Contexts/NotesContext';

function Highlight({ text: textStr, as }) {
  const { searchValue } = useNotes();

  const text = textStr.split('');

  const firstIndex = text.indexOf(searchValue.at(0));
  const lastIndex = searchValue.length;

  const firstPart = text.splice(0, firstIndex).join('');
  const higlightingText = text.splice(0, lastIndex).join('');
  const lastPart = text.join('');
  console.log(firstPart);
  console.log(higlightingText);
  console.log(lastPart);

  return <div>{text}</div>;
}

export default Highlight;
