import React, { useState, useEffect } from "react";
import { Book } from "@/models/book/book";
import { BookService } from "@/api/api_book";
import BookCard from "@/components/book/BookCard";
import BookFilter from "@/components/book/BookFilter";
import SearchBar from "@/components/searchBar/SearchBar"; 
import { Row, Col, Spinner } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filters, setFilters] = useState<{ category: string; condition: string }>({ category: "", condition: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const bookService = new BookService(); // Service pour les livres

  // Fonction pour récupérer les livres en fonction des filtres
  const fetchBooks = async (searchTerm: string = "") => {
    setLoading(true);
    try {
      const allBooks = await bookService.getAllBooks();

      // Appliquer les filtres et la recherche sur les données récupérées
      const filteredBooks = allBooks.filter((book) => {
        const matchesCategory = filters.category ? book.category === parseInt(filters.category) : true;
        const matchesCondition = filters.condition ? book.bookCondition === parseInt(filters.condition) : true;
        const matchesSearchTerm = searchTerm
          ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
          : true;

        return matchesCategory && matchesCondition && matchesSearchTerm;
      });

      setBooks(filteredBooks);
    } catch (error) {
      console.error("Erreur lors de la récupération des livres:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(); // Charger les livres au montage
  }, [filters]);

  // Fonction pour gérer le changement des filtres
  const handleFilterChange = (newFilters: { category: string; condition: string }) => {
    setFilters(newFilters);
  };

  // Fonction pour gérer les recherches depuis la SearchBar
  const handleSearch = (searchTerm: string) => {
    fetchBooks(searchTerm);
  };

  return (
    <div>
      {/* Barre de recherche */}
      <SearchBar  />

      {/* Composant de filtre */}
      <BookFilter onFilterChange={handleFilterChange} />

      {/* Affichage des livres */}
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {books.length > 0 ? (
            books.map((book) => (
              <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <BookCard book={book} />
              </Col>
            ))
          ) : (
            <div>Aucun livre trouvé.</div>
          )}
        </Row>
      )}
    </div>
  );
};

export default SearchPage;
