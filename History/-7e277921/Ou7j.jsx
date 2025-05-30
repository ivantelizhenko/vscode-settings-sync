import { useEffect, useState } from 'react';
import styles from './Categories.module.css';

function Categories() {
  const [categories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await fetch('www.themealdb.com/api/json/v1/1/categories.php');
      const data = res.json();
    }
  }, []);

  return (
    <div className={styles.categoriesContainer}>
      <div className={styles.category}>category 1</div>
      <div className={styles.category}>category 2</div>
      <div className={styles.category}>category 3</div>
      <div className={styles.category}>category 4</div>
      <div className={styles.category}>category 5</div>
    </div>
  );
}

export default Categories;
