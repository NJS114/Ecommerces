import { GetServerSideProps } from 'next';
import React from 'react';
import { Book } from '@/models/book/book';
import BookDetails from '@/components/book/BookDetails';
import { BookService } from '@/api/api_book';

interface BookPageProps {
  book: Book | null;
  error: string | null;
}

const BookPage: React.FC<BookPageProps> = ({ book, error }) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (!book) {
    return <p>Le livre demandé n'a pas été trouvé.</p>;
  }

  return (
    <div className="book-page">
      <BookDetails book={book} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const bookService = new BookService();
  let book: Book | null = null;
  let error = null;

  try {
    book = await bookService.getBookById(id);
  } catch (err) {
    error = 'Le livre avec cet ID est introuvable ou une erreur est survenue.';
  }

  return {
    props: {
      book,
      error,
    },
  };
};

export default BookPage;
