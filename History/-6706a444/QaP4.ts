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
    const res = await fetch(`${API_URL}/books/${id}`);

    if (!res.ok) throw new Error('Some problem with deleting book');

    const newData = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
fetch('https://example.com/api/items/1', {
  method: 'DELETE',
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Помилка при видаленні елемента');
    }
    return response.json();
  })
  .then(data => {
    console.log('Елемент успішно видалено:', data);
  })
  .catch(error => {
    console.error('Сталася помилка:', error);
  });
