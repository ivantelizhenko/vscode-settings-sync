import styles from './ModalWindow.module.css';

function ModalWindow({ title, handlerResolved, handlerRejected }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>Modal</div>
    </div>
  );
}

export default ModalWindow;
