import styles from './ModalWindow.module.css';

function ModalWindow({ title, handlerAccept, handler }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>Modal</div>
    </div>
  );
}

export default ModalWindow;
