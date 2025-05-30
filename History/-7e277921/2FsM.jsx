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

        const { categories } = await response.json();

        setCategories(categories);
      } catch (err) {
        console.error(err.message);
      }
    }
    getCategories();
  }, []);

  if (!categories.length) return <Loader />;

  return (
    <div className={styles.categoriesContainer}>
      {categories.map(category => (
        <div key={category.idCategory} className={styles.category}>
          {category.strCategory}
        </div>
      ))}
    </div>
  );
}

export default Categories;
