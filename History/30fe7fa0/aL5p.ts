import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

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

/**
 * Оновлює документ у колекції Firestore за його ID.
 * @param collectionName - Назва колекції.
 * @param docId - Ідентифікатор документа, який потрібно оновити.
 * @param updatedData - Об'єкт з оновленими даними.
 * @returns Promise<void>
 */
async function updateEventById(id: string, updatedEvent: Event): Promise<void> {
  try {
    // Створюємо посилання на документ
    const docRef = doc(db, collectionName, id);
    // Оновлюємо документ
    await updateDoc(docRef, updatedEvent);
    console.log(`Документ з ID ${id} успішно оновлено.`);
  } catch (error) {
    console.error('Помилка при оновленні документа:', error);
  }
}

// Використання функції
updateDocumentById('events', 'документ_ID', {
  status: 'новий статус',
  name: 'оновлена назва',
});
