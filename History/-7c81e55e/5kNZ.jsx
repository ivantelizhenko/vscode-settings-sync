import Button from './Button';
import styles from './ModalWindow.module.css';

function ModalWindow({ title, handlerResolved, handlerRejected }) {
  return (
    <div className={styles.overlay} onClick={handlerRejected}>
      <div className={styles.modal}>
        <p className={styles.title}>{title}</p>
        <div className={styles.buttonContainer}>
          <Button onClick={handlerResolved} type="green">
            Yes
          </Button>
          <Button onClick={handlerRejected} type="red">
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModalWindow;
