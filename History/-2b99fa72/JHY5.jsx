import { useState } from 'react';
import styles from './ListItem.module.css';

function ListItem({ data }) {
  const [isActive, setIsActive] = useState(false);
  const { title = 'Нова нотатка', description, date } = data;

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
          : description.length > 23
          ? `${description.slice(0, 23)}...`
          : description}
        }
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
