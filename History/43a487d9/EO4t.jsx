import { useNotes } from '../Contexts/NotesContext';

function Highlight({ text: textStr, as }) {
  const { searchValue } = useNotes();

  const text = textStr.split('');

  const firstIndex = text.indexOf(searchValue.at(0));
  const lastIndex = searchValue.length;

  const firstPart = text.splice(0, firstIndex).join('');
  const higlightingText = text.splice(0, lastIndex).join('');
  const lastPart = text.join('');

  if (as === 'title')
    return (
      <h2>
        firstPart
        <h2 className="highlight">higlightingText</h2>
        lastPart
      </h2>
    );
  if (as === 'description') return <div>{text}</div>;
}

export default Highlight;
