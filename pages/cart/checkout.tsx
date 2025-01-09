import React, { useState, useRef, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCartContext } from '@/components/cart/context/CartContext';
import { PaymentService } from '@/api/api_payment';
import { PaymentRequest } from '@/models/payment/payment_request';
import { Currency } from '@/models/Enums';
import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutForm from '@/components/cart/CheckoutForm';

const CheckoutPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

   

    try {
      const redirectUrl = await PaymentService.Payment();
      window.location.href = redirectUrl; 
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Paiement</h1>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Chargement...' : 'Payer'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};


export default CheckoutPage;
