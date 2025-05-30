import styles from './ModalWindow.module.css';

function ModalWindow({ title, handlerResolved, handlerRejected }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
