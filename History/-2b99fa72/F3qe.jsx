import { useState } from 'react';
import styles from './ListItem.module.css';
import { formatListItemNote } from '../Utils/helpers';
import { useSelectedNote } from '../Contexts/SelectedNote';

function ListItem({ data }) {
  const { title = 'Нова нотатка', description, date, id } = data;
  const { selectedNote, setSelectedNote } = useSelectedNote();
  return (
    <div
      className={`${styles.container} ${
        selectedNote ? styles.containerActive : ''
      }`}
      onClick={() => {
        setSelectedNote(id);
      }}
    >
      <h2 className={styles.title}>
        {title.length < 1
          ? 'Нова нотатка'
          : title.length > 20
          ? `${title.slice(0, 20)}...`
          : title}
      </h2>
      <span>{formatListItemNote(date)}</span>
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
