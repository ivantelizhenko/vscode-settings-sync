import styles from './ModalWindow.module.css';

function ModalWindow({ title, handlerResolved, handlerRejected }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <p></p>
      </div>
    </div>
  );
}

export default ModalWindow;
