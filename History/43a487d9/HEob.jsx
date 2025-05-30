import styles from './Highlight.module.css';
import { useNotes } from '../Contexts/NotesContext';

function Highlight({ text: textStr, as }) {
  const { searchValue } = useNotes();

  // if (searchValue.length < 2) return textStr;
  // const text = textStr.toLowerCase().split('');

  // const firstIndex = text.indexOf(searchValue.toLowerCase().at(0));
  // const lastIndex = searchValue.length;

  // const firstPart = text.splice(0, firstIndex).join('');
  // const higlightingText = text.splice(0, lastIndex).join('');
  // const lastPart = text.join('');

  // return (
  //   <span>
  //     {firstPart}
  //     <span className={styles.highlight}>{higlightingText}</span>
  //     {lastPart}
  //   </span>
  // );
}

export default Highlight;
