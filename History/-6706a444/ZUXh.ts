import { API_URL } from '../utils/constants';

export async function getBooks() {
  try {
    const res = await fetch(`${API_URL}/books`);

    if (!res.ok) throw new Error('Some problem with fetching books');

    const data = await res.json();

    return data.map(
      (book: {
        title: string;
        author: string;
        category: 'Fiction' | 'Non-Fiction' | 'Science';
        isbn: string;
      }) => ({ ...book, isbn: +book.isbn })
    );
  } catch (err) {
    console.error(err);
  }
}

export async function deleteBooks(id: string) {
  try {
    const res = await fetch(`${API_URL}/books/${id}`, { method: 'DELETE' });

    if (!res.ok) throw new Error('Some problem with deleting book');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

async function updateItem(itemId, updatedData) {
  const url = `https://example.com/api/items/${itemId}`;
  const requestOptions = {
    method: 'PUT', // або 'PATCH', залежно від потреб
    headers: {
      'Content-Type': 'application/json',
      // Додайте інші заголовки, якщо необхідно, наприклад, авторизацію
    },
    body: JSON.stringify(updatedData),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(`Помилка: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Елемент успішно оновлено:', data);
    return data;
  } catch (error) {
    console.error('Сталася помилка при оновленні елемента:', error);
    // Обробіть помилку відповідним чином у вашому додатку
  }
}
