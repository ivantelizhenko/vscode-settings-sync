import styles from './ListItem.module.css';

function ListItem({ data }) {
  const { title = 'Нова нотатка', description, date, active } = data;

  return (
    <div
      className={`${styles.container} ${active ? styles.containerActive : ''}`}
      onClick={() => {
        console.log('hey');
      }}
    >
      <h2 className={styles.title}>
        {title.length < 1 ? 'Нова нотатка' : title}
      </h2>
      <span>{date}</span>
      <p className={styles.description}>
        {description.length < 1
          ? 'Ще немає тексту'
          : description.length > 23
          ? `${description.slice(0, 23)}...`
          : description}
      </p>
    </div>
  );
}

export default ListItem;
