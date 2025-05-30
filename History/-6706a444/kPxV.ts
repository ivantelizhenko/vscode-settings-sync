import { API_URL } from '../utils/constants';

export async function getBooks() {
  try {
    const res = await fetch(`${API_URL}/books`);

    if (!res.ok) throw new Error('Some problem with getching books');

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

export async function deleteBooks() {
  try {
    const res = await fetch(`${API_URL}/books`);

    if (!res.ok) throw new Error('Some problem with getching books');

    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
