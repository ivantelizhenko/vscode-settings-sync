import { collection, getDocs } from 'firebase/firestore';

async function fetchEvents() {
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
}

// Виклик функції (наприклад, у useEffect в React)
fetchEvents()
  .then(events => console.log('Events:', events))
  .catch(error => console.error('Помилка при зчитуванні даних:', error));
