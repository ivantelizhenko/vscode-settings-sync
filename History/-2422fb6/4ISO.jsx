import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo__container}>
        <img
          className={styles.logo__image}
          src="https://s3-alpha-sig.figma.com/img/8dbf/b659/b9a56b38ee00aaf9263d16e3abd74b46?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hrpo9v4D4Xnr793QSe9ZuIg0dAwfSmE~HCX4zzT4xBOMux8G50Ey4VQl54SM~b0njvo8P~i5Q9qjo5O1M54c7TM7S3QmmMlsslyOOq1DRrjht0CkmDesZ8FopIxUD3TB0mNuoZO7prBkQnNYgQt6PWi4JXS4h8K97YuAOPqkQPynj4KWLOi61bf7jQCWvxSmA3xGKEf~qkSV60vmV3XsxdnLogXwWzTh6NLFW~IFl2t82ZV-Fn-lRFrLvHmqqP8n~CcCqRsrF4Zn06Vw7aG8Ch6HAcvq-Az-bItFxQL60XdcmaySOZozfdhHWXPrZlju-QAp79aySbj56aN58dT6ZA__"
          alt="Logo image"
        />

        <p className={styles.logo__name}>
          <span>Logo</span> <span>note</span>
        </p>
      </div>
      <div className={[...styles.button__container, styles.button]}>
        <div className={styles.button__add}>Button Add</div>
        <div className={styles.button__remove}>Button Delete</div>
      </div>
      <div className={styles.search}>Input Search</div>
    </div>
  );
}

export default Header;
