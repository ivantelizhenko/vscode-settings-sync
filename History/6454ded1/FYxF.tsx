import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import _ from 'lodash';

import InputField from './InputField';
import SelectField from './SelectField';
import BookFormRow from './BookFornRow';
import Button from '../Button';
import { useBooks } from '../../store/BookContext';
import { BookStatus } from '../../store/BookContextType';

const StyledBookForm = styled.form`
  & div:not(:last-of-type) {
    margin-bottom: 2.4rem;
  }

  max-width: 80rem;
  height: fit-content;
  background-color: #fefae0;
  padding: 2.4rem 4.8rem;
  border-radius: 4px;
  margin: auto;
  position: absolute;
  inset: 0;

  & button {
    margin-top: 2.4rem;
    width: 100%;
  }
`;

type DataBookFields = {
  title: string;
  author: string;
  category: 'Fiction' | 'Non-Fiction' | 'Science';
  isbn: string;
};

function BookForm() {
  const {
    addBook,
    editBook,
    toDashboard,
    setAddFormStatus,
    formStatus,
    clearEditingBook,
    editingBook,
  } = useBooks();
  const [formData, setFormData] = useState<DataBookFields>({
    title: '',
    author: '',
    category: 'Fiction',
    isbn: '',
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title,
        author: editingBook.author,
        category: editingBook.category,
        isbn: editingBook.isbn.toString(),
      });
    }
  }, [editingBook]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const time = format(new Date(), 'dd MMMM y, h:mmaaa');

    if (formStatus === 'add') {
      const newBook = {
        ...formData,
        isbn: +formData.isbn,
        createdAt: time,
        status: BookStatus.Active,
        id: Math.random().toString(),
      };
      addBook(newBook);
      toast.success('Book was added!');
    }

    if (formStatus === 'edit') {
      const newBookWithoutModify = {
        ...formData,
        isbn: +formData.isbn,
      };

      const newBook = {
        ...editingBook,
        ...formData,
        isbn: +formData.isbn,
        modifiedAt: time,
      };

      if (!_.isEqual(editingBook, newBookWithoutModify)) {
        editBook(newBook);
      }
      clearEditingBook();
      setAddFormStatus();
      toast.success('Book was edited!');
    }

    toDashboard();
    setFormData({
      title: '',
      author: '',
      category: 'Fiction',
      isbn: '',
    });
  }

  function handleToDashboard() {
    toDashboard();

    if (formStatus === 'edit') {
      setAddFormStatus();
      clearEditingBook();
      setFormData({
        title: '',
        author: '',
        category: 'Fiction',
        isbn: '',
      });
    }
  }

  return (
    <StyledBookForm onSubmit={handleSubmit}>
      <BookFormRow>
        <InputField
          name="title"
          title="Title"
          value={formData.title}
          onChange={handleChange}
        />
      </BookFormRow>
      <BookFormRow>
        <InputField
          name="author"
          title="Author"
          value={formData.author}
          onChange={handleChange}
        />
      </BookFormRow>
      <BookFormRow>
        <SelectField
          name="category"
          title="Category"
          options={['Fiction', 'Non-Fiction', 'Science']}
          onChange={handleChange}
          value={formData.category}
        />
      </BookFormRow>
      <BookFormRow>
        <InputField
          name="isbn"
          title="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          type="number"
        />
      </BookFormRow>

      <BookFormRow>
        <Button onClick={handleToDashboard}>&larr; Dashboard</Button>
        <Button type="submit">
          {formStatus === 'add' ? 'Add' : 'Edit'} book
        </Button>
      </BookFormRow>
    </StyledBookForm>
  );
}

export default BookForm;
