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
    title: 'Title2',
    date: '10:11',
    description: 'description2',
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
