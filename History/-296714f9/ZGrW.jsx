import styles from './Form.module.css';
import { formatOpenNote } from '../Utils/helpers';

function Form() {
  return (
    <form className={styles.container}>
      <div className={styles.data}>{formatOpenNote(currentNote.date)}</div>
      <input
        id="title"
        maxLength="100"
        className={`${styles.box} ${styles.title}   `}
        placeholder="Заголовок"
        type="text"
        value={currentNote.title || ''}
        onChange={handleChange}
      />
      <textarea
        id="description"
        className={`${styles.box} ${styles.description} `}
        placeholder="Текст"
        type="text"
        value={currentNote.description || ''}
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
