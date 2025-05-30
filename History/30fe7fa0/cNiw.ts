import {
  collection,
  doc,
  getDocs,
  UpdateData,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase';
import { Event } from '../store/ScheduleContextType';

type FetchedEvents = {
  title: string;
  description: string;
  id: string;
  date: string;
  status: string;
};

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

    return eventsList as FetchedEvents[];
  } catch (err) {
    console.error('Помилка при зчитуванні даних:', err);
  }
}

export async function updateEventById(updatedEvent: Event) {
  try {
    // Створюємо посилання на документ
    const docRef = doc(db, 'events', updatedEvent.id);
    // Оновлюємо документ
    await updateDoc(docRef, updatedEvent as UpdateData<Event>);
    console.log(`Документ з ID ${id} успішно оновлено.`);
  } catch (error) {
    console.error('Помилка при оновленні документа:', error);
  }
}
