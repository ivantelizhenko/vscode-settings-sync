import { useState } from 'react';
import styles from './ListItem.module.css';
import { formatListItemNote } from '../Utils/helpers';
import { useSelectedNote } from '../Contexts/SelectedNoteContext';
import {
  TITLE_PRIVIEW_LENGTH,
  DESCRIPTION_PRIVIEW_LENGTH,
} from '../Utils/constants';

function ListItem({ data }) {
  const { title, description, date, id } = data;
  const { selectedNote, setSelectedNote } = useSelectedNote();

  return (
    <div
      className={`${styles.container} ${
        selectedNote === id ? styles.containerActive : ''
      }`}
      onClick={() => {
        setSelectedNote(id);
      }}
    >
      <h2 className={styles.title}>
        {title.length < 1
          ? 'Нова нотатка'
          : title.length > TITLE_PRIVIEW_LENGTH
          ? `${title.slice(0, TITLE_PRIVIEW_LENGTH)}...`
          : title}
      </h2>
      <span>{formatListItemNote(date)}</span>
      <p className={styles.description}>
        {description.length < 1
          ? 'Ще немає тексту'
          : description.length > DESCRIPTION_PRIVIEW_LENGTH
          ? `${description.slice(0, DESCRIPTION_PRIVIEW_LENGTH)}...`
          : description}
      </p>
    </div>
  );
}

export default ListItem;
