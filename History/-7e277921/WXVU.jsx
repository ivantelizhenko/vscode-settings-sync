import { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import Loader from './Loader';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        setCategories(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    getCategories();
  }, []);
  console.log(categories);
  if (!categories.length) return <Loader />;

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
