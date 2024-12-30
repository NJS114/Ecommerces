import { GetServerSideProps } from 'next';
import React from 'react';
import axios from 'axios';
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

  return <BookDetails book={book} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    console.log("Paramètres reçus :", params);

    const { id } = params as { id: string };
    console.log("ID extrait :", id);
  
    const bookService = new BookService();
    let book: Book | null = null;
    let error = null;
  
    try {
      console.log("Tentative de récupération du livre avec l'ID :", id);
      book = await bookService.getBookById(id);
      console.log("Livre récupéré avec succès :", book);
    } catch (err) {
      console.error("Erreur lors de la récupération du livre :", err);
  
      // Si une réponse d'erreur existe, affichez ses détails
      if (axios.isAxiosError(err) && err.response) {
        console.error("Statut de l'erreur :", err.response.status);
        console.error("Détails de l'erreur :", err.response.data);
      }
  
      error = "Le livre avec cet ID est introuvable ou une erreur est survenue.";
      console.log("Message d'erreur défini :", error);
    }

  return {
    props: {
      book,
      error,
    },
  };
};

export default BookPage;
