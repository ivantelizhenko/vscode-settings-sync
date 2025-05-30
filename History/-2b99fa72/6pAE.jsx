import styles from './ListItem.module.css';

function ListItem({ data }) {
  const { title = 'Нова нотатка', description, date, active } = data;

  return (
    <div
      className={`${styles.container} ${active ? styles.containerActive : ''}`}
    >
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.date}>
        {description.length < 1 ? 'Ще немає тексту' : description}
      </span>
      <p className={styles.description}>
        {description.length < 1 ? 'Ще немає тексту' : description}
      </p>
    </div>
  );
}

export default ListItem;
