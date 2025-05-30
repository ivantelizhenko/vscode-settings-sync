import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function fetchEvents() {
  try {
    // Створюємо посилання на колекцію "events"
    const eventsCol = collection(db, 'events');
    // Отримуємо всі документи з колекції
    const eventsSnapshot = await getDocs(eventsCol);
    // Перетворюємо кожен документ у об'єкт з id та даними
    const eventsList = eventsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return eventsList;
  } catch (err) {
    console.error('Помилка при зчитуванні даних:', err);
  }
}
