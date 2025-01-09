import React, { useState } from 'react';
import { Book } from '@/models/book/book';
import { useCartContext } from '@/components/cart/context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketItem } from '@/models/cart/cart_basket-item';
import { Button, Container, Row, Col } from 'react-bootstrap';

interface BookDetailsProps {
  book: Book;
}

const BookDetails: React.FC<BookDetailsProps> = ({ book }) => {
  const { addToCart, cartItems } = useCartContext();
  const [loading, setLoading] = useState(false);

  // Calcul du prix total
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.price || 0;
      const itemQuantity = item.quantity || 0;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      if (!book.rentalPrice) {
        console.error('Rental price is missing for this book:', book);
        return;
      }

      const newItem: BasketItem = {
        productId: book.id,
        name: book.title,
        description: book.synopsis,
        price: book.rentalPrice,
        quantity: 1,
        totalPrice: book.rentalPrice,
        status: 2,
        imageUrl: "https://via.placeholder.com/300x400?text=Book+Image",
        attributes: {
          size: "N/A",
          color: "N/A",
        },
      };

      await addToCart(newItem);
      alert(`"${book.title}" a été ajouté au panier !`);
    } catch (error) {
      console.error('Erreur lors de l’ajout au panier :', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        {/* Image du produit */}
        <Col md={6} className="text-center">
          <img
            src={"https://via.placeholder.com/300x400?text=Book+Image"}
            alt={book.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </Col>

        {/* Détails du produit */}
        <Col md={6}>
          <h1 className="fw-bold mb-3">{book.title}</h1>
          <p className="text-muted">{book.author}</p>

          <div className="mt-4">
            <h4 className="text-success fw-bold">Prix de location : {book.rentalPrice}€</h4>
            <p>{book.synopsis}</p>
          </div>

          {/* Boutons Stripe */}
          <div className="d-flex flex-column gap-3 mt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleAddToCart}
              disabled={loading}
              style={{ backgroundColor: '#6772e5', border: 'none' }}
            >
              {loading ? 'Ajout en cours...' : 'Ajouter au panier'}
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              style={{ color: '#6772e5', borderColor: '#6772e5' }}
            >
              Acheter maintenant (via Stripe)
            </Button>
          </div>

          {/* Total panier */}
          <div className="mt-4">
            <h4 className="fw-bold">Total du panier : {calculateTotalPrice()}€</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
