import React, { useState, useEffect } from "react";
import { Book } from "@/models/book/book";
import { BookService } from "@/api/api_book"; // Assurez-vous que le service est correctement importé
import BookCard from "@/components/book/BookCard";
import BookFilter from "@/components/book/BookFilter";
import { Row, Col, Spinner, Form } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filters, setFilters] = useState<{ category: string; condition: string }>({ category: "", condition: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Ajout de l'état pour la recherche

  const bookService = new BookService(); // Créez une instance du service

  // Fonction pour récupérer les livres en fonction des filtres et de la recherche
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const allBooks = await bookService.getAllBooks();
      
      // Appliquer les filtres et la recherche sur les données récupérées
      const filteredBooks = allBooks.filter((book) => {
        const matchesCategory = filters.category ? book.category === parseInt(filters.category) : true;
        const matchesCondition = filters.condition ? book.bookCondition === parseInt(filters.condition) : true;
        const matchesSearchQuery = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || book.author.toLowerCase().includes(searchQuery.toLowerCase()); // Recherche par titre ou auteur

        return matchesCategory && matchesCondition && matchesSearchQuery;
      });

      setBooks(filteredBooks); // Mettre à jour l'état avec les livres filtrés
    } catch (error) {
      console.error("Erreur lors de la récupération des livres:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks(); // Récupérer les livres au montage
  }, [filters, searchQuery]); // Relance la récupération des livres si les filtres ou la recherche changent

  // Fonction pour gérer le changement des filtres
  const handleFilterChange = (newFilters: { category: string; condition: string }) => {
    setFilters(newFilters); // Mettre à jour les filtres
  };

  // Fonction pour gérer le changement de la recherche
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Mettre à jour la recherche
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recherche de Livres</h1>
      
      {/* Composant de filtre */}
      <BookFilter onFilterChange={handleFilterChange} />

      {/* Champ de recherche */}
      <Form.Control
        type="text"
        placeholder="Rechercher un livre..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4"
      />

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
