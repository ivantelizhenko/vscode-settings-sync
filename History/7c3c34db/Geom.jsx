import styles from './List.module.css';
import ListItem from './ListItem.jsx';

const fakeData = [
  {
    title: 'Title1',
    date: 'date1',
    description: '',
    active: false,
  },
  {
    title: 'Title2',
    date: 'date2',
    description: 'description2',
    active: true,
  },
  {
    title: '',
    date: 'date3',
    description: 'description3',
    active: false,
  },
  {
    title: 'Title4',
    date: 'date4',
    description: 'description4',
    active: false,
  },
];

function List() {
  return (
    <ul className={styles.list}>
      {fakeData.map(data => (
        <ListItem key={data.title} data={data} />
      ))}
    </ul>
  );
}

export default List;
