import { useState } from 'react';
import styles from './ListItem.module.css';
import { formatListItemNote } from '../Utils/helpers';

function ListItem({ data }) {
  const [isActive, setIsActive] = useState(false);
  const { title = 'Нова нотатка', description, date } = data;
  console.log(date.slice(6 / -1));
  return (
    <div
      className={`${styles.container} ${
        isActive ? styles.containerActive : ''
      }`}
      onClick={() => {
        setIsActive(active => !active);
      }}
    >
      <h2 className={styles.title}>
        {title.length < 1
          ? 'Нова нотатка'
          : title.length > 20
          ? `${title.slice(0, 20)}...`
          : title}
      </h2>
      <span className={styles.date}>{formatListItemNote(date)}</span>
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
