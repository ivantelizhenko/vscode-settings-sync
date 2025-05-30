import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function getAllEvents() {
  try {
    // Отримуємо посилання на колекцію "events"
    const eventsCollectionRef = collection(db, 'events');
    // Отримуємо всі документи з колекції
    const querySnapshot = await getDocs(eventsCollectionRef);
    // Перетворюємо кожен документ у об’єкт з id
    const events = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return events;
  } catch (error) {
    console.error('Помилка отримання подій:', error);
    return [];
  }
}

console.log(getAllEvents());
