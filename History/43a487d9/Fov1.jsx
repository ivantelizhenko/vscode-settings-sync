import { useNotes } from '../Contexts/NotesContext';

function Highlight({ textStr, as }) {
  const { searchValue } = useNotes();

  const text = textStr.split('');
  console.log(text);
  // const firstIndex = text.find(searchValue.at(0));
  // // const lastIndex = searchValue.length;

  // const firstPart = text.splice(0, firstIndex);
  // const higlightingText = text.slice(firstIndex, lastIndex);
  // const lastPart = text.slice(lastIndex + 2, text.length - lastIndex);
  console.log(firstPart);
  // console.log(higlightingText);
  console.log(lastPart);

  return <div>{text}</div>;
}

export default Highlight;
