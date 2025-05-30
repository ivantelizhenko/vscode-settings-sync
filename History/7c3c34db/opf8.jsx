import { useNotes } from '../Contexts/NotesContext.jsx';
import styles from './List.module.css';
import ListItem from './ListItem.jsx';

const fakeData = [
  {
    title: 'Title1',
    date: '12:34',
    description: '',
    active: false,
  },
  {
    title: '0123456789001234567890012345678900123456789001234567890',
    date: '10:11',
    description: 'description2description2description2description2',
    active: true,
  },
  {
    title: '',
    date: '16.06.2023',
    description: 'description3',
    active: false,
  },
  {
    title: 'Title4',
    date: '13.04.2023',
    description: 'description4description4description4',
    active: false,
  },
];

function List() {
  const { notes } = useNotes();

  return (
    <ul className={styles.list}>
      {notes.map(data => (
        <ListItem key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default List;
