import React from 'react';
import { Book } from '@/models/book/book';
import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  return (
    <Container className="mt-5">
      <Row className="d-flex flex-column flex-md-row align-items-center">
        {/* Image du livre à gauche */}
        <Col md={6} className="text-center mb-4 mb-md-0">
          <img
            src={"https://via.placeholder.com/300x400?text=Book+Image"}
            alt={book.title}
            className="img-fluid rounded shadow"
            style={{
              maxHeight: '400px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Col>

        {/* Détails du livre à droite */}
        <Col md={6}>
          <h1 className="fw-bold mb-3" style={{ color: '#6f4f37' }}>{book.title}</h1>
          <h4 className="text-muted mb-4" style={{ color: '#9b7d5f' }}>{book.author}</h4>

          <div className="my-4">
            <p style={{ fontSize: '1.2rem' }}><strong>Édition :</strong> {book.edition}</p>
            <p style={{ fontSize: '1.2rem' }}><strong>Publié le :</strong> {new Date(book.publicationDate).toLocaleDateString()}</p>
            <p style={{ fontSize: '1.2rem' }}><strong>Synopsis :</strong> {book.synopsis}</p>
          </div>

          <div className="my-4">
            <h4 className="text-success fw-bold" style={{ fontSize: '1.5rem' }}>Prix de location : {book.rentalPrice}€</h4>
          </div>

          {/* Boutons d'action */}
          <div className="d-flex gap-3 mt-4">
            <Button variant="warning" size="lg" style={{ backgroundColor: '#d1a15b', borderColor: '#d1a15b' }}>
              Louer ce livre
            </Button>
            <Button variant="success" size="lg">
              Acheter ce livre
            </Button>
          </div>

          
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
