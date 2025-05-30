import { Book } from '../store/BookContextType';
import { API_URL } from '../utils/constants';

interface FetchOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  endpoint: string;
  body?: Book;
}

async function fetchData<T>({
  method,
  endpoint,
  body,
}: FetchOptions): Promise<T | undefined> {
  const url = `${API_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    return await res.json();
  } catch (err) {
    console.error('Fetch error:', err);
    return undefined;
  }
}

export async function getBooks() {
  const data = await fetchData<Book[]>({ method: 'GET', endpoint: '/books' });
  return data?.map(book => ({ ...book, isbn: +book.isbn }));
}

export async function deleteBook(itemId: string): Promise<void> {
  await fetchData<void>({ method: 'DELETE', endpoint: `/books/${itemId}` });
}

export async function updateBook(
  itemId: string,
  updatedBook: Book
): Promise<Book | undefined> {
  return await fetchData<Book>({
    method: 'PUT',
    endpoint: `/books/${itemId}`,
    body: updatedBook,
  });
}
