import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '@/models/book/book';  
import { BookService } from '@/api/api_book';

// État initial
interface BookState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null; 
}

const initialState: BookState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk<Book[], void>(
  'books/fetchBooks',
  async () => {
    const service = new BookService();
    const books = await service.getAllBooks();
    return books;
  }
);
export const fetchBooksByAuthor = createAsyncThunk<Book[], string>(
  'books/fetchBooksByAuthor',
  async (author) => {
    const service = new BookService();
    const books = await service.getBooksByAuthor(author); 
    return books;
  }
);

export const fetchBooksByTitle = createAsyncThunk<Book[], string>(
  'books/fetchBooksByTitle',
  async (title) => {
    const service = new BookService();
    const books = await service.getBooksByTitle(title); 
    return books;
  }
);

export const fetchBooksByCategory = createAsyncThunk<Book[], string>(
  'books/fetchBooksByCategory',
  async (category) => {
    const service = new BookService();
    const books = await service.getBooksByCategory(category); 
    return books;
  }
);
export const fetchBooksByPublisher = createAsyncThunk<Book[], string>(
  'books/fetchBooksByPublisher',
  async (edition) => {
    const service = new BookService();
    const books = await service.getBooksByPublisher(edition); 
    return books;
  }
);

// Action asynchrone pour créer un livre
export const createBook = createAsyncThunk<Book, Book>(
  'books/createBook',
  async (book) => {
    const service = new BookService();
    const createdBook = await service.createBook(book);
    return createdBook;
  }
);

// Création du slice avec Redux Toolkit
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(createBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books.push(action.payload);
      })
      .addCase(fetchBooksByAuthor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksByAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksByAuthor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(fetchBooksByTitle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksByTitle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksByTitle.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(fetchBooksByPublisher.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksByPublisher.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksByPublisher.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      })
      .addCase(fetchBooksByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooksByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooksByCategory.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Une erreur est survenue';
      });
  },
});


export const selectBooks = (state: { books: BookState }) => state.books.books;
export const selectLoading = (state: { books: BookState }) => state.books.status;
export const selectError = (state: { books: BookState }) => state.books.error;


export default bookSlice.reducer;
