import React from 'react';
import { useCartContext } from './context/CartContext';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartItem from './CartItem';

const CartSummary: React.FC = () => {
  const { cartItems } = useCartContext();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
  const shippingCost = 5;
  const totalAmount = totalPrice + shippingCost;

  const handleCheckout = () => {
    // Redirige vers la page de checkout
    router.push('/cart/checkout');
  };

  return (
    <div className="cart-summary">
      <Card className="shadow-sm mb-4 p-3">
        <h3>Résumé du Panier</h3>
        {cartItems.map((item) => (
          <CartItem key={item.productId} {...item} />
        ))}
        <Row className="mt-3">
          <Col md={6}>
            <p>Total: <strong>${totalPrice.toFixed(2)}</strong></p>
            <p>Frais de port: <strong>${shippingCost.toFixed(2)}</strong></p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <p>Total à payer: <strong>${totalAmount.toFixed(2)}</strong></p>
          </Col>
        </Row>

        <div className="payment-section mt-4">
          <Button
            onClick={handleCheckout}
            variant="primary"
            className="w-100 mt-3"
          >
            Passer à la caisse
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CartSummary;
