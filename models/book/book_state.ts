import { reactive } from "vue";
import { Book } from "@/models/book/book";

export const bookState = reactive({
  books: [] as Book[],
  selectedBook: null as Book | null,
  loading: false,
  error: null as string | null,
});

/**
 * Actions pour gérer les livres
 */
export const bookActions = {
  setBooks(books: Book[]) {
    bookState.books = books;
  },

  addBook(book: Book) {
    bookState.books.push(book);
  },

  updateBook(updatedBook: Book) {
    const index = bookState.books.findIndex((b) => b.id === updatedBook.id);
    if (index !== -1) {
      bookState.books[index] = updatedBook;
    }
  },

  removeBook(bookId: string) {
    bookState.books = bookState.books.filter((b) => b.id !== bookId);
  },

  setSelectedBook(book: Book | null) {
    bookState.selectedBook = book;
  },

  setLoading(isLoading: boolean) {
    bookState.loading = isLoading;
  },

  setError(error: string | null) {
    bookState.error = error;
  },
};
