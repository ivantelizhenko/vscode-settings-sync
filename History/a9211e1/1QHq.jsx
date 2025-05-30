import Empty from './Empty.jsx';
import styles from './List.module.css';
import ListItem from './ListItem.jsx';

function List() {
  if (data.length === 0) return <Empty message="Empty" />;

  return (
    <ul className={styles.list}>
      {data
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map(el => (
          <ListItem key={el.id} el={el} />
        ))}
    </ul>
  );
}

export default List;
