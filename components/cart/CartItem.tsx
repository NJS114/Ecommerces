import React from 'react';
import { useCartContext } from './context/CartContext';
import { BasketItem } from '@/models/cart/cart_basket-item';
import { Button, Form, ListGroup, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItem: React.FC<BasketItem> = ({ productId, price, quantity, status }) => {
  const { removeFromCart, updateQuantity } = useCartContext();

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  return (
    <ListGroup.Item className="d-flex align-items-center border-0 rounded shadow-sm mb-3">
      <Row className="w-100">
        {/* Information du produit */}
        <Col md={7}>
          <h6 className="mb-1" style={{ fontSize: '1rem', fontWeight: '500' }}>Produit ID: {productId}</h6>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>Prix: <strong>${price.toFixed(2)}</strong></p>
        </Col>

        {/* Quantité */}
        <Col md={3}>
          <Form.Group controlId={`quantity-${productId}`} className="mb-0">
            <Form.Control
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="text-center"
              style={{
                border: '1px solid #e0e0e0', 
                borderRadius: '4px', 
                padding: '0.5rem',
                fontSize: '1rem',
              }}
            />
          </Form.Group>
        </Col>

        {/* Bouton Supprimer */}
        <Col md={2}>
          <Button
            variant="outline-danger"
            onClick={() => removeFromCart(productId)}
            className="w-100"
            style={{
              borderRadius: '4px',
              fontSize: '0.9rem',
              padding: '0.5rem',
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              color: '#dc3545',
            }}
          >
            Supprimer
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
