import styles from './ListItem.module.css';

function ListItem({ data }) {
  const { title = 'Нова нотатка', description, date, active } = data;

  return (
    <div
      className={`${styles.container} ${active ? styles.containerActive : ''}`}
    >
      <h2 className={styles.title}>
        {title.length < 1 ? 'Нова нотатка' : title}
      </h2>
      <span>{date}</span>
      <p className={styles.description}>
        {description.length < 1 ? 'Ще немає тексту' : description}
      </p>
    </div>
  );
}

export default ListItem;
