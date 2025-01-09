import { reactive } from "vue";
import { Book } from "@/models/book/book";

// État de Book
export const BookState = reactive({
  books: [] as Book[], // Liste des livres
  selectedBook: null as Book | null, // Livre sélectionné (si applicable)
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed', // Statut pour le chargement des données
  error: null as string | null, // Erreur éventuelle
});

/**
 * Actions pour gérer les livres
 */
export const bookActions = {
  setBooks(books: Book[]) {
    BookState.books = books;
    BookState.status = 'succeeded'; // Changer le statut après avoir récupéré les livres
  },

  addBook(book: Book) {
    BookState.books.push(book);
  },

  updateBook(updatedBook: Book) {
    const index = BookState.books.findIndex((b) => b.id === updatedBook.id);
    if (index !== -1) {
      BookState.books[index] = updatedBook;
    }
  },

  removeBook(bookId: string) {
    BookState.books = BookState.books.filter((b) => b.id !== bookId);
  },

  setSelectedBook(book: Book | null) {
    BookState.selectedBook = book;
  },

  setLoading(isLoading: boolean) {
    BookState.status = isLoading ? 'loading' : 'idle'; // Modifier le statut selon l'état de chargement
  },

  setError(error: string | null) {
    BookState.error = error;
    BookState.status = 'failed'; // Changer le statut en cas d'erreur
  },
};
