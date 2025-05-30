import {
  addDoc,
  collection,
  deleteDoc,
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
    const eventsCol = collection(db, 'events');
    const eventsSnapshot = await getDocs(eventsCol);
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
    const docRef = doc(db, 'events', updatedEvent.id);
    await updateDoc(docRef, updatedEvent as UpdateData<Event>);
    console.log(`Документ з ID ${docRef.id} успішно оновлено.`);
  } catch (error) {
    console.error('Помилка при оновленні документа:', error);
  }
}

export async function addNewEvent(newEvent: Event) {
  try {
    const eventsCollection = collection(db, 'events');
    const docRef = await addDoc(eventsCollection, newEvent);
    console.log('Новий документ додано з ID:', docRef.id);
  } catch (error) {
    console.error('Помилка при додаванні документа:', error);
  }
}

export async function deleteEventById(
  collectionName: string,
  docId: string
): Promise<void> {
  try {
    // Створюємо посилання на документ
    const docRef = doc(db, collectionName, docId);
    // Видаляємо документ
    await deleteDoc(docRef);
    console.log(`Документ з ID ${docId} успішно видалено.`);
  } catch (error) {
    console.error('Помилка при видаленні документа:', error);
  }
}
