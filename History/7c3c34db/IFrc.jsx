import styles from './List.module.css';
import ListItem from './ListItem.jsx';

const fakeData = [
  { title: 'Title1', date: 'date1', description: 'description1' },
  { title: 'Title2', date: 'date2', description: 'description2' },
  { title: 'Title3', date: 'date3', description: 'description3' },
  { title: 'Title4', date: 'date4', description: 'description4' },
  { title: 'Title1', date: 'date1', description: 'description1' },
  { title: 'Title2', date: 'date2', description: 'description2' },
  { title: 'Title3', date: 'date3', description: 'description3' },
  { title: 'Title4', date: 'date4', description: 'description4' },
  { title: 'Title1', date: 'date1', description: 'description1' },
  { title: 'Title2', date: 'date2', description: 'description2' },
  { title: 'Title3', date: 'date3', description: 'description3' },
  { title: 'Title4', date: 'date4', description: 'description4' },
  { title: 'Title1', date: 'date1', description: 'description1' },
  { title: 'Title2', date: 'date2', description: 'description2' },
  { title: 'Title3', date: 'date3', description: 'description3' },
  { title: 'Title4', date: 'date4', description: 'description4' },
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
