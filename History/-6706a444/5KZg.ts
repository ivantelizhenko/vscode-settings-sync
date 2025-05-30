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

export async function deleteBook(itemId: string) {
  try {
    const res = await fetch(`${API_URL}/books/${itemId}`, { method: 'DELETE' });

    if (!res.ok) throw new Error('Some problem with deleting book');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function updateBook(itemId: string, updatedBook) {
  const url = `${API_URL}/books/${itemId}`;
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedBook),
  };

  try {
    const res = await fetch(url, requestOptions);
    if (!res.ok) {
      throw new Error('Some problem with updating book');
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
