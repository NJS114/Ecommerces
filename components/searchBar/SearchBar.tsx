import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import store from '@/redux/store';

interface SearchResult {
  type: string;
  item: any;
}

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const combinedResults = results;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();

  const handleSearch = (term: string) => {
    if (!term.trim() || term.trim().length < 2) {
      setResults([]);
      return;
    }

    const lowerCaseTerm = term.toLowerCase();

    // Fetching data from Redux store
    const books = store.getState().books.books;

    // Filter books by title and author
    const filteredBooks = books.filter((book: { title: string; author: string }) =>
      book.title.toLowerCase().includes(lowerCaseTerm) ||
      book.author.toLowerCase().includes(lowerCaseTerm),
    );

    setResults(
      filteredBooks.map(book => ({
        type: 'Book',
        item: book,
      })),
    );
    setSelectedIndex(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && results.length > 0) {
      const selected = selectedIndex !== null ? combinedResults[selectedIndex] : combinedResults[0];
      if (selected) {
        router.push(`/book/${selected.item.id}`);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const toggleSearch = () => {
    setIsOpen(!isOpen);
    if (!isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const resultImage = (result: SearchResult) => {
    return 'https://example.com/default-image.jpg';
  };

  return (
    <div className={`search-bar ${isOpen ? 'open' : ''}`}>
      <input
        type="text"
        ref={inputRef}
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setIsOpen(false)}
        placeholder="Search by title or author..."
        className="search-input"
      />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>

      {isOpen && results.length > 0 && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li
              key={index}
              className={`search-result ${index === selectedIndex ? 'selected' : ''}`}
              onClick={() => router.push(`/book/${result.item.id}`)}
            >
              <img src={resultImage(result)} alt={result.item.title} />
              <div>
                <p>{result.item.title}</p>
                <p className="author">{result.item.author}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
